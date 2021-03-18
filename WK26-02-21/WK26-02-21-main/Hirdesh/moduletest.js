const { O_DIRECTORY } = require('constants');
const http= require('http');
var db=require('./myfirstmodule')
http.createServer(function(req, res){
res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write("Hello World \n Today date and time:" +db.GiveDate())
res.write("\n"+db.PrintMyName())
    res.end("Killing the object Here")

}
).listen(8080,()=>{
console.log("The server is running on port 8080")
}
    
    
    )