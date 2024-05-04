const fs = require('fs')
const readableStream = fs.createReadStream(__filename)
readableStream.close();
readableStream.on("close",()=>{
          console.log("This is from clos event")
}) 
setImmediate(()=>console.log("Immediate"))
setTimeout(()=>console.log("Set timeout"),0)
process.nextTick(()=>console.log("Next tick"))
Promise.resolve().then(()=>console.log("The promise bitch"))
// close queue callbacks are executed after all otherqueueu callbacks in a given iteration
// of the evenet loop