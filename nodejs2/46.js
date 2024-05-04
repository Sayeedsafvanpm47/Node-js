// when io queue gets the control, it it empt, then it proceeds to the polling part
// it asks if readfile if its completed, and will pass the callback functoin to the io queue, but
// th econtrol is past the io queue and the control is shifted to check queue where
// set Immediate is exec, and nothing is left in the current iteration so it starts a new iteration
//  then the microtask queue,timer is checked and its seen empty then only it will
// proceed to exec the cb fn waiting inside the io queue that why the readFile comes last inside the output
// so we have to understand that the io events are polled and callback fn are added
// to the io queue only after the io is complete
const fs = require('fs')
fs.readFile(__filename,()=>{
          console.log("This is readfile")
})
process.nextTick(()=>console.log("Next tick1"))
Promise.resolve().then(()=>console.log("Promise 1"))
setTimeout(()=>console.log("Set timeout 1"),0)
for(let i=0; i<200000; i++){}
setImmediate(()=>console.log("Set immediate"))