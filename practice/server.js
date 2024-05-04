var http = require('http')
var url = require('url')
function MyServer(route,handle){
          var serve = (request,response)=>{
                    var reviewdata = ''
               
                    var pathname = url.parse(request.url).pathname
                    console.log("request for "+ pathname);
                    request.setEncoding('utf-8')
                    request.addListener("data",function(chunks){
                              reviewdata += chunks
                    })
                    request.addListener("end",function(){
                              route(handle,pathname,response,reviewdata)
                    })
                  
          }
          http.createServer(serve).listen(8888)
}
exports.MyServer = MyServer