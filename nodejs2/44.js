// setTimeout(()=>console.log("This is set timeout 1"),0)
// setTimeout(()=>{console.log("This is set timeout 2")
// Promise.resolve().then(()=>{
//           console.log("This is a promise")
//           process.nextTick(()=>console.log("This is next tick inside promise of timer"))
// })
// }
// ,1000)
// setTimeout(()=>{
//           console.log("This is set timeout 3")
//           process.nextTick(()=>console.log("This is next tick inside of timer"))
// },500)


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