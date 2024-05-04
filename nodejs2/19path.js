const path = require("node:path")


// 
// console.log(__filename)
// console.log(__dirname);
// // diff methods available
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname)) 
// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)))
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute('./batman'))
// note that ./ is relative its not absolute path

// join joins all path together with given path segments together using the platform
// specific sepreator as delimiter and normalizes the resulting path
// path.join accepts one or more strings as arguments..
// console.log(path.join("folder1","folder2","index.html"))
// we can see 3 strings joined by platform specifiv seperatpr as a delimiter
// if i add a forward slash at the start, the path will also have the forward slash at the start
// console.log(path.join("/folder1","folder2","index.html"))
// but if i add double fwd slash to the folder 2 the resulting path will still have only
// console.log(path.join("/folder1","//folder2","index.html"))
// one slash
// but if we do like this as shown below.. the result would be only doler1 slash index
// console.log(path.join("/Folder1","Folder2","../index.html"))
// by using, the above we are saying jump from folder 2 to index.html

// console.log(path.join(__dirname,"data.json"))
// the above will give a full path to data.json
// resolve - it sequents a sequence of path or path segments into an absolute path

// console.log(path.resolve("Folder1","Folder2","index.html"))
// The above will concatenate the mentioned things with the actual path
// and returns the result as a full absolute path

// console.log(path.resolve("/Folder1","Folder2","index.html"))
// if you use a forward slash before first arg, then resolve will return the path from
// that forward slash

// console.log(path.resolve("/Folder1","//Folder2","index.html"))
// // only shows folder 2 and index html

// console.log(path.resolve("/Folder1","//Folder2","../index.html"))
// //in the above case only index.html is logged since foler2 is the root and it jumps up one layer

// console.log(path.resolve(__dirname,"data.json"))
