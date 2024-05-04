const fs = require('node:fs')
// for synchronous reading
// const fileContents = fs.readFileSync("./file.txt")
// the above code will return a buffer value, since fs uses buffer bts, so we have to specify utf as seconf parameter
// const fileContents = fs.readFileSync("./file.txt","utf-8")
// console.log(fileContents)
// asynchronous readfile
// node js is asynchronous, it have to do task without blocking main thread so we have this

//  fs.readFile("./file.txt","utf-8",(error,data)=>{
//           if(error)
//           {
// // the pattern of using callbacks where the first arg is error is called error first callback pattern
// // this is commonly used in node js
// console.log(error)
//           }
//           else{
//                     console.log(data)
//           }

// })
// console.log("This will come befre the text since the other one is async")

// now lets see how to write
// sync write
fs.writeFileSync("./greet.txt","Hello sachu mon")
// fs.writeFile("./greet.txt", "Hello sayeed", (error,data)=>{
//           if(error)
//           {
//                     console.log(error);
//           }
//           else{
//                     console.log(data);
//           }
// })
// but when we execute this above write async, this will overwrite the previous content..
// but if you want to append , set a new parameter with a object, inside which has a flag and set it "a"
fs.writeFile("./greet.txt", " Hello sayeed", {flag : "a"}, (error,data)=>{
          if(error)
          {
                    console.log(error);
          }
          else{
                    console.log(data);
          }
})
// so doing like above, we can append the previous content too