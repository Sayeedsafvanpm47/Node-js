// // let a = [1,2,3,4,5,5,4,3,6,3,1]
// //  const n = a.forEach((x)=>console.log(x))
// // let count ={}
// // a.forEach(x=>{
// //           if(count[x])
// //           {
// //                     count[x]++
// //           }
// //           else{
// //                     count[x]=1
// //           }
// // })
// // console.log(count)

// // let b = a.map((x)=>{
// //           return (x*2)
// // })
// // console.log(b)


// const b =[ {
//           name:'hp',price:2000
// },{
//           name:'lenovo',price:20000
// }]
// const res = b.map((x)=>{
//          if(x.price>2000)
//          {
//           return 
//          }
// })
// console.log(res);

// const a = ['a','d','c','e']
// const d = a.map(Number)
// console.log(d)

// let a = [2,3,41,5,7,4]
// const s = a.filter((x)=>{
//           if(x%2===0)
//           {
//                     return x
//           }
// })
// console.log(s);

// let a = [1,2,3,4,5]
// const b = a.slice(1,4)
// console.log(b);
// let a = [1,2,3,4,5,6]
// a.splice(2,3,2,3,4)
// console.log(a);
// let a = [2,3,4,100,98,56]
// a.sort((a,b)=>{
//          return  a-b
// })
// console.log(a);
// let a = [1,2,3]
// let b = [4,5,6]
// let c = a.concat(...b,7,8,9)
// console.log(c);
// let a = [1,2,3,4,5,6]
// const b = a.fill(0,2,5)
// console.log(b);
// let a = [1,2,3]
// const res = a.join(",")
// console.log("I will be there in "+res)

// const num = [1,2,3,4]
// num.unshift(-1,0)
// console.log(num);
// function greet(name) {
//           console.log(`Hello ${name} I'm Mr ${this.title} ${this.name}`);
//         }
        
//         const person = { title: "Mr", name: "sayeed" };
//         const names = ["John", "Gsus"];
        
//         names.forEach((item) => {
//           greet.apply(person, [item]);
//         });
        
// function greet(...name){
//           name.forEach((name)=>{
//                     console.log(`Jello ${name}, I am ${this.title} ${this.name}!`)
//           })
         

// }
// const person = {
//           title : "Mr"
// , name:"sayeed"
// }
// greet.call(person,'Gsus','John')

// function greet(name){
// console.log(`Hello ${name} , I am ${this.title} ${this.name}`)
// }
// const person = { title : "mr",name:"Sayeed"}
// const Hello = greet.bind(person)
// Hello("sayeed")
// Hello("Safvan")
// curying
// const add = x => y => `${x+y}`
// console.log(add(3)(4))
// const add = function (x){
//           return function (y){
//                     return `${x+y}`
//           }
// }
// console.log(add(4)(5))
// usecase of currying in partially comnpleted fn
// const mul = x => y => `${x*y}`
// const tots = mul(10)
// console.log(tots(4));

function* hello(){
          console.log("sayeed")
          yield 1;
}
hello()
