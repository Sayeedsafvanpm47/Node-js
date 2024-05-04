// const add = (a,b) => {
//           return a+b
// }
// module.exports = add

// the second patter.. in this instead of having module.exports on a serperate line we directly exports 
// with the help of the arrow function
// module.exports = (a,b)=>{
//           return a + b
// }

// now lets see the 3rd pattern where we export more than one variable or function

// const add = (a,b)=>{
//           return a+b
// }
// const sub = (a,b) => {
//           return a-b
// }

// module.exports = {
//           // add: add,
//           // sub:sub
//           add,sub
// }
// if keybvaluye are same we dont have to specify key value just specify key

// another pattern is where we can use module.exports.variable name 
// module.exports.add =(a,b)=>{
//           return a+b
// }
// module.exports.sub =   (a,b)=>{
//           return a - b
// }

// in fifth pattern we will write the iife
// we can just use exports with the variavle instead of using it along with the module
// but this practive is highly discouraged./. why?
// see in the next doc
// exports.add = (a,b)=>{
//           return a+b

// }
//  exports.sub = (a,b)=>{
//           return a - b
//  }

// const path = require('path')
// let a = path.join(__dirname,__filename)
// let b = path.format(path.parse(__dirname))
// let c= path.resolve(__dirname,'file.txt')
// console.log((c))

// const EventEmmitter = require('events')
// const event = new EventEmmitter()
// event.on('birthday',(name)=>{
//           console.log(`happy birthday ${name}`)
// })
// event.emit('birthday',('sayeed'))



