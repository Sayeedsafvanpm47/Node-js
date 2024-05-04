// const cluster = require('cluster')
// if(cluster.isMaster){
//           console.log(`Master process ${process.pid} is running`);
// }
// else{
//           console.log(`Worker ${process.pid} started`);
// }
// if we node 61cluster, then we can see master process 7652(pid(will vary)) is running
// now lets see master vs worker
// as master we need to create new workers. so we have to use fork method on the cluster object
// lets create two workers by calling it twice
const cluster = require('cluster')
const OS = require('os')
console.log(OS.cpus().length);
if(cluster.isPrimary){
          console.log(`Master process ${process.pid} is running`);
          cluster.fork()
          cluster.fork()
      
}
else{
          console.log(`Worker ${process.pid} started`);

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
}
// so by doing this, we get the home page fastly and slow page with its time, so here we can see that the \
// that the second req is not blocked whiule frst req is being served
// the first wrker handles the first req with its node instance
// the second wrker with its own node instance handle the scnd req
// this thus leads to better performance
// it is important that you create two wokrer at minimum
// can we create a large num of workers using cluster.fork()?
// its not true, we should only create as many worjers that the cpu cores that the computer have
// if you create more workers than there are logical cores on the computer it can cause an overhead as the
// system will have to schedule all the created workers with fewer number of cores
// to verufy how many workers you can create, import os module and console (OS.cpus().length)
// another easy way to do all of these is by using the npm package pm2
// which will run your app as cluster and will decide how many workers will be req acc to your machine
// we can run the no cluster file with pm2