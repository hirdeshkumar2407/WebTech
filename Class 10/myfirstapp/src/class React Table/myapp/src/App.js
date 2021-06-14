/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './App.css';
import Table3 from './Table3';
class App extends Component {
  
      render() {
     
       

    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
   return (
      <div className="container">
        <Table3 characterData={characters} />
      </div>
    )
  }
}

export default App
