
var http = require('http')
var url = require('url')
function Startserver(route,handle){
var serve = (request,response)=>{
          var reviewData = ""
          var pathname = url.parse(request.url).pathname
          console.log("Request recieved for "+ pathname)
          request.setEncoding('utf8')
          request.addListener("data",function(chunks){
                    reviewData += chunks
          })
           request.addListener("end",function(){
                    route(handle,pathname,response,reviewData)
           })          
         
       
}

var server = http.createServer(serve)
server.listen(8888)
}
console.log("Request started");

// now lets export the server instance
exports.Startserver =   Startserver 