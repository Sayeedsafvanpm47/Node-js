const fs = require('node:fs/promises')
console.log("First")
fs.readFile("file.txt",'utf-8')
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
console.log("Second");
// note that toplevel async can only be used in modules that is .mjs files
// async function readFile()
// {
//           try {
//                     const data = await fs.readFile("./file.txt","utf-8")
//                     console.log(data)
//           }
//           catch(err){
//    console.log(err)
//           }
// }
// readFile()

// so you can see that this code is easier to read..even though its just a syntactical wrapper over promise
// the callback function of fs module api are prefferable oer promise when max performance is req
// over time and memory allocation, if its no biggie u can use promise