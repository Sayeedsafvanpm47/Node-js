const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req,res)=>{
          const name = "Sayeed"
          res.writeHead(200,{
                    "Content-Type": "text/html"
          })
        let html =  fs.readFileSync("./index2.html","utf-8")
          html = html.replace("{{name}}",name)
          res.end(html)
})
server.listen(3000,()=>{
          console.log("The server for template html started")
})