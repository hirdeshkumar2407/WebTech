/* eslint-disable no-unused-vars */

import React,{useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios';
function App() {
 

  const [title,setTitle]=useState('')
  const [isbn,setIsbn]=useState('')
  const [pageCount,setPageCount]=useState(null)
  const [shortDescription,setshortDescription]=useState('')
  const [bookList,setBookList]=useState([]);
  const [newtitle,setnewtitle]=useState('')
  const populateRecords= () => {
    Axios.get('http://localhost:3002/read').then(res => {
      setBookList(res.data)
    })
  }
  populateRecords();

  const clearALLField = () => {

    setTitle('');
    setIsbn('');
    setPageCount('');
    setshortDescription('');
    setnewtitle('')

  }
  const updateTitle=(id)=>{
    Axios.put('http://localhost:3002/update',{
      id:id,
      newtitle:newtitle
      
    })

    populateRecords();
  }
 const addToList=()=>{
Axios.post("http://localhost:3002/insert",
{
  title: title, isbn: isbn, pageCount: pageCount, shortDescription: shortDescription
 } );
 populateRecords();
 clearALLField ();
}


 
///print list //useEffect like a container middleware
/* INSTEAD OF POPULATEDATA
useEffect(()=>{
  Axios.get("http://localhost:3002/read").then((response)=>{
    setBookList(response.data)
  })
},[])
*/

const deleteBook=(id)=>{
  Axios.delete(`http://localhost:3002/delete/${id}`)

}


 return (



    <div className="App">
     <h1>BOOK CRUD APP WITH MERN </h1>
     <label>Title:</label> <input type="text" onChange={(event)=>{setTitle(event.target.value)}}></input>
     <label >ISBN:</label> <input type="text" onChange={(event)=>{setIsbn(event.target.value)}}></input>
     <label >Page Count:</label> <input type="number" onChange={(event)=>{setPageCount(event.target.value)}}></input>
     <label >Short Description:</label> <input type="text" onChange={(event)=>{setshortDescription(event.target.value)}} ></input>
     <button onClick={addToList}>Add to the List</button>


<h1>Book List</h1>
<table id='books'>
  <thead>
<th>Title</th><th>ISBN</th><th>Page Count</th><th>Short Description</th><th>&nbsp;</th>

  </thead>
<tbody>

  {bookList.map((val,key)=>{
      return(
       <tr>
         <td>
         {val.title} <input type='text' placeholder='New Title' onChange={(event)=>{setnewtitle(event.target.value)}}></input>
        <button onClick={()=>updateTitle(val._id)}>Update</button>
         </td>    
         <td>{val.isbn}</td> 
         <td>{val.pageCount}</td>     
         <td>{val.shortDescription}</td>
         <td><button onClick={()=>{deleteBook(val._id)}}>Delete</button></td> 
       </tr>
      )
    })}
</tbody>
</table>
    </div>


);
}

export default App;
