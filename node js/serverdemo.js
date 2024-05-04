var http = require('http')
http.createServer(function(request,response){
          console.log("request recieved")
          response.writeHead(200,{
                    "Content-Type" : "text/plain"
          })
          response.write("Hello from our app")
          response.end()
}).listen(8888);
console.log("req started");
// the req staretd will be printed first and 
// only when you acces the browser then only
// the request reciebed will be shown
// so this shows the asynchronity
// also this says that it will only execute
// whn it recieves a request