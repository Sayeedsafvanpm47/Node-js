
// experiment 1
// console.log("'First")
// process.nextTick(()=>console.log("This is process.next1"))
// console.log("Second")
// 
// expermiment2
// Promise.resolve().then(()=> console.log("This is a promise"))
// process.nextTick(()=>console.log("next tick"))

// expreiment 3

process.nextTick(()=>console.log("Next tick 1"))
process.nextTick(()=>{
          console.log("Next tick 2")
          process.nextTick(()=>console.log("Next tick inside 2"))
})
process.nextTick(()=>console.log("Next tick 3"))

Promise.resolve().then(()=>console.log("Promise 1"))
Promise.resolve().then(()=>{
          console.log("Promise 2")
          process.nextTick(()=>console.log("Next tick inside promise 2"))
})
Promise.resolve().then(()=>console.log("Promise 3"))