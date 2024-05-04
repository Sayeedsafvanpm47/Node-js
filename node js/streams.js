var fs = require('fs')
var readableStream = fs.createReadStream('fsinp.txt')
var data= '';
readableStream.setEncoding('utf-8')
readableStream.on('data',function(chunk){
          data += chunk
})
readableStream.on('end',function(){
          console.log(data);
})
var writeData = "Hello sayeed"
var writableSteam = fs.createWriteStream('output.txt')
writableSteam.write(writeData,'utf-8')
writableSteam.end()
writableSteam.on('finish',function(){
          console.log("Write completed");
})