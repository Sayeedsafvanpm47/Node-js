// file system module
// the read below is an asycn fileread

var fs = require('fs');
fs.readFile('fsinp.txt',function(err,data){
          if(err){
                    console.log(err);
          }
          else{
                    console.log("Async data is" + data.toString());
          }
})

// this one below is a sync file read
var data = fs.readFileSync('fsinp.txt')
console.log("Sync data is" + data.toString());
console.log("This is the end");
