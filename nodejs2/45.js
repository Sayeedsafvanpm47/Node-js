// const fs = require('node:fs')
// fs.readFile(__filename,()=>{
//           console.log("Read file 1");
// })
// process.nextTick(()=>console.log("next tick 1"))
// Promise.resolve().then(()=>console.log("Promise 1"))
// inference
// callback in microtask queue are exec before callbacks in io queue
// one callback is passe to io queue, one to nexttick queue and one to promise queue
// next gets top priority then promise then io

// exp 2
// const fs = require('fs')
// fs.readFile(__filename,()=>{console.log("First file")})
// setTimeout(()=>console.log("Settimeout"),0)
// we cannot gaurentee that setTimeout will  run furst before the readfile,, there is a visible
// inconsistency in the output
// why is this??
// its becuase of how min delay is set for timer
// when you set 0 millisecond delay it overrides to 1 millisecond delay, so noode js has to figure
// out if 1 ms timer has elapsed..if event loop enters the timer at 0.05 ms, 1 ms timer hasnt been exec
// so the contorl moves to the io queue
// in next iterqation , timer queue callback gets exec
// if cpu is busy, then the then if eventloop enters at 1.01, then the timer will get exec
// due to uncertainity of cpu being busy , and overwriting of the 0 sec delay, we can never 
// guarentee when the 0 sec timer or io gets contorl
// this 1 ms inference was retrieved from the c code present in the chromium DOMTimer cpp file
// inside it i searched for the DOMTimer :: DOMTimer, inside the function body were calc using
// 1 ms or 1*specified sec.. so when we pass 0, it becomes 1,0 so we take 1 ms as time

// const fs = require('node:fs')
// fs.readFile(__filename,()=>{
//           console.log("This is read file 1");
// })
// process.nextTick(()=>console.log("Next tick 1"))
// Promise.resolve().then(()=>console.log("Promise 1"))
// setTimeout(()=>{
//           console.log("Set time out 1")
//           process.nextTick(()=>console.log("Next tick inner"))
// },0)
// setTimeout(()=>{
//           console.log("Settimeout2")
// },0)

// // to avoid the confusion between 0 timer problem, were going to add a emoty forloop
for(let i=0; i<20000000; i++)
{

}
// from this ex we can infer that the io module will only run after the setTimeout
