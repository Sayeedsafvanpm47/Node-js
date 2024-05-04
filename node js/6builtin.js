var http = require('http')
 http.createServer((request,response)=>{
response.writeHead(200,{
          "Content-Type" : "text/plain"
})
response.write("Hello sayeed")
response.end()
 }).listen(8888)

//  inside the createserver i passed an arrow function
// with two parameters, a request and a response
// then inside the arrow fn, 
// i used response.writehead(200), this 200 was passed
// for the status that is okay and then passed an object\
// that specifies the content type which is set to text/plain
// and then we responded with response.write("Hello")
// then we ended response with response.end\
// then inside the node, we initiated this file
// then we have to go to the website abd write\
// http:localhost:8888
// 8888 was used because we write it as out portnumber
// lets summarize
// we have req the http core module
// http core module has a createserver function
// this took a calback fn, inside it we passed 
// request and reponse as parameter
// right now we are not going to do anythung wuth
// the reqyest
// using the response objetc we used the write to
// display hello sayeed inside the browser\
