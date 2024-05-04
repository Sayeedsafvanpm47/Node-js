// const fs = require('fs')
// fs.readFile(__filename,()=>{
//           console.log("ReafFile1")
//           setImmediate(()=>console.log("Set immediate inner"))
// })
// process.nextTick(()=>console.log("Next tick"))
// Promise.resolve().then(()=>console.log("Promise"))
// setTimeout(()=>console.log("Timeout"),0)
// for(let i=0; i<200000; i++)
// {

// }
// in this the next tick will be first,then promise, then timeout, then goes to the io, io pollinh
// the io polling will return a cb to the io queue, then it proceeds,
// the check and close queues are also empty       
// then iterates again, exec the callback fn inside the io queue, then youll get a check queue
// it will go to the check queueu and be exec, thats why this time it comes after the readFile

// next exp

// const fs = require('fs')
// fs.readFile(__filename,()=>{
//           console.log("ReafFile1")
//           setImmediate(()=>console.log("Set immediate inner"))
//           process.nextTick(()=>console.log("Next tick inner"))
//           Promise.resolve().then(()=>console.log("Promise inner"))
// })
// process.nextTick(()=>console.log("Next tick"))
// Promise.resolve().then(()=>console.log("Promise"))
// setTimeout(()=>console.log("Timeout"),0)
// for(let i=0; i<200000; i++)
// {

// }
// you know what happends in the above case right ; )
// next tick - promise - settimeout - ioqueue - iopoll - cb set to io queue - next iteration
// comes to io queue since everything else is empty - exec cb - then cb set to next,prom and check 
// we know that before entering check queue our event loop again checks the microtask queue
// for any available call backs. if found it will execute it
// in this case next, promise will be exec and then the setimmediate will be exec

//  setImmediate(()=>console.log("Set imm 1"))
 
//  setImmediate(()=>{
//           console.log("Set imm 2")
// process.nextTick(()=>console.log("Next tick inner"))
// Promise.resolve().then(()=>console.log("Pomise inner"))
// })


//  setImmediate(()=>console.log("Set imm 3"))
 
// what if there is a setTimeout as well as a setImmediate
// in this case also the previous prbm will arise.
// like there may be some inaccuracy in the outputs.. like we cant determine where the conrol go
// this case is similar to the case of setTimeout and io queue
// so we can use an empty big for loop to avoid this
// setTimeout(()=>console.log("This is setTimeout1"),0)
// setImmediate(()=>console.log("Set immediate"))
// for(let i=0; i<20000000; i++)
// {
          
// }