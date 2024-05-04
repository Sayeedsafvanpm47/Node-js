// const fs = require('node:fs')

// const readableStream = fs.createReadStream("./file.txt",{
//           encoding:"utf-8"
// })
// const writeableStream = fs.createWriteStream("./file3.txt")
// readableStream.pipe(writeableStream)
// so we got the content of file in file 3.. 
// pipe returns the destination screen that enables chaining, however the condition is that the dest screen has to
// be readable, duplex or transform screen
// in the above ex, we cannot chain by using .pipe, instead we can use zlib hwich is another built in module
const fs = require('node:fs')
const zlib = require('node:zlib')
const gzip = zlib.createGzip()
const readableStream = fs.createReadStream("./file.txt",{
          encoding:"utf-8"
})
readableStream.pipe(gzip).pipe(fs.WriteStream("./file3.txt.gz"))
// the above code will return a transform stream, so we can call .pipe and pass in fs.writestream and
// dest is file3.txt.gs, so we are chaining with .pipe, moving from a readable stream to transform
// stream to a writeable stream
const writeableStream = fs.createWriteStream("./file3.txt")
readableStream.pipe(writeableStream)

// zlib provides compression functionality using gzip algo
// zlib allows us to create zipped files
// zlib has a built in transofrm screen