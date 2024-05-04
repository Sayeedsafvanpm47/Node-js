// 12 app server

const { log } = require('console')
var http = require('http')
const { longjump } = require('./module')
var serve = (request,response)=>{
          response.writeHead(200,{
                    "Content-Type":"text/plain"
          })
          response.write("Hello its me")
          response.end()
}
var server = http.createServer(serve)
server.listen(8888)
console.log("Request started");

// now lets create a main file app.js 
// we also have to convert the server file into a module
// after this i set the export refernce to app.js
// exports.server =  {server}
// ill paste the code below

// var serverModule = require('./server')
//  serverModule.server