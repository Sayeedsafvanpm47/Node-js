const fs = require('node:fs')
const readableStream = fs.createReadStream("./file.txt",{
          encoding: "utf-8",
          highWaterMark:3//this will bring data in chunks of 3 bytes, so 3 char are logged at a time
})
const writeableStream = fs.createWriteStream("./file2.txt")
// streams extend from eventemitter class, so we can use on
readableStream.on("data",(chunk)=>{
          console.log(chunk)
          writeableStream.write(chunk)
}) 
// buffer that streams use has a default size of 64kb
// when we have large files, streaming data from one file to another will save us a lot of time and mem
// there are four types of steams

