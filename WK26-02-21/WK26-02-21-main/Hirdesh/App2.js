const http= require('http');

http.createServer(function(req, res){
res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write("Hello World \n")
    res.end("Killing the object Here")

}
).listen(8080);