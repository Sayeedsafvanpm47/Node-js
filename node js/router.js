function route(handle,pathname,response,reviewData)
{
          console.log("Routing request for" + pathname)

if(typeof handle[pathname] === 'function')
{
          handle[pathname](response,reviewData);
}
else{
          console.log("No handler for" + pathname)
            response.writeHead(404,{
                    "Content-Type" : "text/plain"
            })
            response.write("Error page not found")
             response.end()
}

}
exports.route = route