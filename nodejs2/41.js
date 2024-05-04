const http = require('node:http')
const MAX_CALLS = 10

const start = Date.now();
for(let i=0; i<MAX_CALLS; i++)
{
          http
          .request("http://www.google.com",(res)=>{
                    res.on("data",()=>{})
                    res.on("end",()=> {
                    console.log(`Request : ${i+1}`,Date.now()-start);
                    })
          })
          .end()
}

// based on this experiment we can infer that, even cyrpto.pbkdf2 and http.request are async, http
// .request are not using the threadpool, we can notice this by noticing the time stays same for
// more than 1- req as well as 6
// http are not affected by the cpu cores either
// http.request is a network inp out operation rather than a cpu bound operation
// libuv instead delegates the work to the os kernel and whenever possible it will poll the kernel
// and see if the request has completed
// this is the reason we see the same req time when we see many number of req 