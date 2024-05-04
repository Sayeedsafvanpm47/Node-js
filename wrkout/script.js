// const a = [1,2,3,4,5]
// a.splice(3,0,3.5)
// console.log(a);
// const newarray = a.map(x=>x+5)
// console.log(newarray);
// const sum = newarray.reduce((acc,curr)=>{
//   return acc = acc+curr
  
// },0)
// console.log(sum);

function Hello(a,b){
          return new Promise((resolve,reject)=>{
                    if((`${a+b}`)>10)
                    {
                              resolve("Promise true")
                    }
                    else{
                              reject("Error occured")
                    }
          })
}
const response = Hello(5,6)
response.then((res)=>{
          console.log(`Resolved ${res}`);
})
.catch((error)=>{
          console.log("Error occured"+error);
})
.finally(()=>{
          console.log("Finsihed");
})