const http = require('http')
const server = http.createServer((req,res)=>{
          console.log(req);
          res.writeHead(200,{
                    "Content-Type" : "text/plain"
          })
          res.end("Hello sayeed")
})
server.listen(3000,()=>{
          console.log("The server is running on port 3000");
})