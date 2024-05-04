const buffer = new Buffer.from("Sayeed")
console.log(buffer)
// the above will print an output containing hexadecimal refernces of the charecters
console.log(buffer.toJSON());
// the above will contain an object containing type : buffer and data : [unicode of charecters]
console.log(buffer.toString());
// this will print the string as it is
// now what if we try to assign a new value to the buffer?
buffer.write("Safv")
console.log(buffer.toString());
// this will return by replacing the first 4 letters of sayeed, its because buffers have a limited mem
buffer.write("SafvanpmSayeed")
console.log(buffer.toString())
// the above will only print safvan since it has a limited mem space.. the space determines on what
// we mention inside the buffer when we initialize it

