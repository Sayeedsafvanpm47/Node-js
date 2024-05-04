// cluster module
// it enables the creation of child proceces also called workers that run simultaneoutsly
// all created workers share same server port

// cluster module
// let us check an example with no cluster module first
const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url==="/"){ 
          res.writeHead(200,{"Content-Text":"text/plain"})
          res.end("Home page")
}
else if(req.url === "/slow-page"){
          for(let i=0;i<6000000;i++)
          res.writeHead(200,{"Content-type":"text/plain"})
         
          res.end("Slow page")
}
})
server.listen(8000,()=>console.log("Server is running on port 8000"))
// now the above will display home page fast, and then will display slow page a lil bit too slow
// and if we load slow page again and ina= antoher tab load home page simultaneously, 
// the homepage which was loaded faster is now slowed down
// how th ecluster module works in node js>
// when we run index.js , the file is treated as a cluster master and it is incharge of
// spawmnig new workers which run an instance for our node app
// master is only incharge of the workers..
// the workers are incharge of handling incoming req, reading files etc. master wont do these
// each worker gets its own event loop mem and v8 instance, so we are able to share
// workload accross instances without blocking incomingh instance

// check to cluster.js for more infor of cluster prgrm
// we can run the command pm2 start 61.js -i 0
// 0 indicates we want pm2 to fidure out optimum nunmer of workers
// if i had specified 2 it will only create 2 workers
// the above code will convert this file into a cluster
// to stop pm2 , run:    pm2 stop 61.js