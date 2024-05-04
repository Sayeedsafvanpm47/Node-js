function route(handle,pathname,response,reviewdata){
          
          console.log("Routnig request for "+pathname);
          if(typeof handle[pathname] === 'function')
          {
                    handle[pathname](response,reviewdata)
          }
          else{
                    console.log("No handler for "+pathname);
                    response.writeHead(404,{
                              "Content-Type":"text/plain"

                    })
                    response.write("Eror 404 page not found")
                    response.end()
          }
          
}
exports.route = route