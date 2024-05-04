const fs = require('fs')
const read = fs.readFile('hello.txt',(err,data)=>{
   if(err){
          console.log(err);
   }
   else{
          console.log(JSON.stringify(data));
   }
})