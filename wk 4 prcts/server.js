// const add = require('./add')
// const add = require('./add')

// const res = add.add1(5,4)
// setTimeout(()=>{
//           console.log(res)
// },4000)

// console.log("Hello sayeed");

// const sum2 = add.add2(5,9)
// console.log(sum2)

// const add = require('./add')
// console.log(add.add1(2,3))
// console.log(add.sub(6,2))
// const add = require('./add')
// console.log(add.add(4,3))
// console.log(add.sub(8,3))


// console.log(add.add(4,2));

// const data = require('./data.json')
// console.log(data)
// console.log(data.name)
// console.log(data.address);
// const path = require('path')
// // const show = path.join("/folder","/fol","/fl")
// // console.log(show)
// // console.log(path.join(__dirname,'data.json'))
// console.log(path.resolve("/folder1","/fl2","../fl3"))
// console.log(path.resolve(__dirname,'data.json'))
// console.log(path.parse(__filename))



// callback example
// const fs = require('fs')
// fs.readFile('hello.txt','utf-8',(err,res)=>{
//           if(err){
//                     console.log("Error occured")

//           }
// else{
//           console.log(res)
// }

// })
// const EventEmmiter = require('events')
// const emmiter = new EventEmmiter()
// let m = 4;
// emmiter.on('event',()=>{
        
//           console.log(++m)
         
// })
// emmiter.emit('event')
// emmiter.emit('event')
// emmiter.emit('event')
// emmiter.emit('event')
// emmiter.emit('event')
// emmiter.emit('event')
// emmiter.emit('event')

// const EventEmmiter = require('events')
// const emmiter = new EventEmmiter()
// emmiter.on('error',(err)=>{
//           console.error("Error occured")
// })
// emmiter.emit('error')

// const EventEmitter = require('node:events');

// const myEmitter = new EventEmitter();
// myEmitter.on('error', (err) => {
//   console.error('whoops! there was an error');
// });
// myEmitter.emit('error', new Error('whoops!'));

// const buffer = new Buffer.from("sayeed")
// console.log(buffer)
// console.log(buffer.toJSON())
// buffer.write("safg")
// console.log(buffer.toString())
// const fs = require('fs')

// const read = fs.readFileSync('hello.txt','utf-8')
// console.log(read)

// const read = fs.readFile('hello.txt','utf-8',(error,data)=>{
//           if(error)
//           {
//                     console.error(error)
//           }
//           else{
//                     console.log(data)
//           }
// })
// console.log("Data processing")

// fs.writeFileSync('out.txt','Hello mone how are you')
// console.log("data processing")
// fs.writeFile('out.txt',"Hello mone asynchronous myr here",({flag:"a"}),(err,data)=>{
//           if(err)
//           {
//                     console.error(err)
//           }
//           else{
//                     console.log(data)
//           }
// })
// const fs = require('fs/promises')
// console.log("Data starting")
// fs.readFile("hello.txt",'utf-8')
// .then((data)=>console.log(data))
// .catch((err)=>console.error(err))

// const fs = require('fs/promises')
// console.log("data startinf")
// fs.readFile('hello.txt','utf-8')
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))
// console.log("Data processing")

// const fs = require('fs/promises')

// async function read(){
//           try{
//               const data = await fs.readFile('./hello.txt','utf-8')
//               console.log(data)
//           }
//           catch(err)
//           {
//                     console.log(err)
//           }
//           finally{
//                     console.log("finished")
//           }
// }
// read()
// console.log("Data processing")


// const fs = require('fs/promises')
// const show = async ()=>{
//           try{
//                     const look = await fs.readFile('hello.txt','utf-8')
//                     console.log(look)
//           }
//           catch(err){
//                console.error(err)
//           }
//           finally{
//                     console.log("finsihed")
//           }

// }
// show()

// const fs = require('fs')
// const read = fs.createReadStream('./hello.txt','utf-8')
// const write = fs.createWriteStream('./outp.txt')
// read.on('data',(chunk)=>{
//           console.log(chunk)
//           write.write(chunk)
// })

// const fs = require('fs')
// const read =fs.createReadStream('./hello.txt',{
//           encoding : 'utf-8',
//           highWaterMark:1}
//           )
// const write = fs.createWriteStream('./new.txt')
// read.on('data',(chunk)=>{
//           console.log(chunk)
//           write.write(chunk)
// })

// const fs = require('fs')
// const read = fs.createReadStream('hello.txt','utf-8')
// const write = fs.createWriteStream('output.txt')
// const dis = read.pipe(write)

// const http = require('http')
// const server = http.createServer((req,res)=>{
//           res.writeHead(200,{
//                     "content-type":'text'
//           })
//          ,
//          res.end("Hello sayeed") 
// })
// server.listen(3000,()=>console.log("Server running"))


// const http = require('http')
// const server = http.createServer((req,res)=>{
//          const address= {
//                     name : 'sayeed',
//                     place : 'kdlr'

//           }
//           res.writeHead(200,{'content-type' : 'application/json'})
//           res.end(JSON.stringify(address))
// })
// server.listen(3000,()=>console.log("Server running"))

// const http = require('http')
// const server = http.createServer((req,res)=>{
//           if(req.url==='/')
//           {
//                     res.writeHead(200,{
//                               'Content-Type' : 'text/plain'
//                     })
//                     res.end("Home page")
//           }
//           else if(req.url==="/about")
//           {
//                     res.writeHead(200,{
//                               'Content-type' : 'text/plain'
//                     })
//                     res.end("About page")
//           }
//           else{
//                     res.writeHead(400)
//                     res.end("Page not found")
//           }
// }).listen(3000)

// Promise.resolve().then(()=>console.log("Hello"))
// setTimeout(()=>{
//           process.nextTick(() => console.log("Hi"))
// },2000)


// const express = require('express')
// const app = express()
// app.set('view engine','ejs')
// // app.use('/views',express.static(path.join('/index')))
// app.get('/',(req,res)=>{
//           res.render('index',{span:"Sayeed safvan"})})
// app.get('/about',(req,res)=>{
//           res.end("Welcome to about")
// })

// app.listen(3500)

// const express = require('express')
// const app = express()

// app.set('view engine','ejs')
// app.get('/',(req,res)=>{
//           res.render('index',{span:"SAyeed mone"})
// })
// app.listen(3500)
// post ex
// const express = require('express')
// const app = express()
// app.use(express.urlencoded({
//           extended:true
// }))

// app.set('view engine','ejs')
// app.get('/',(req,res)=>{
//           res.render('index2')
// })
// app.post('/log',(req,res)=>{
//           var name = req.body.name
//           res.send(`Hi ${name}`)
// })
// app.listen(3600)

