// const express = require('express')
// const app = express()



// app.get("/ping",(req,res)=>{
//           res.send("Hello sayeed")
// })
// app.listen(3000, ()=>console.log("server started on port 3000"))

// middleware part

// const express = require('express')
// const app = express()
// const myLogger = function(req,res,next){
//           console.log("Logged")
//           next()
// }
// const requestTime = function(req,res,next){
//           req.reqTime = Date.now()
//           next()
// }
// app.use(myLogger)
// app.use(requestTime)
// app.get("/",(req,res)=>{
//           // res.send("Homne route")
//           res.send(`Current time : ${req.reqTime}`)
// })
// app.listen(3000,()=>console.log("Server started for midware ex"))
// middleware over

// working with static files

// const express = require('express')
// const app = express()
// app.use(express.static('public')) 



// app.get('/',function(req,res){
//           res.send('static files')
// })
// app.listen(3000,()=>console.log('App started on port 3000'))

// wrking the above with path module

// const express = require('express')
// const app = express()
// const path = require('path')
// const publicpath = path.resolve(__dirname,public)
// app.use(publicpath,express.static('folder'))
// <img src = "public/img.jpg"></img> 



// app.get('/',function(req,res){
//           res.send('static files')
// })
// app.listen(3000,()=>console.log('App started on port 3000'))

// routing in express

const express = require('express')
const app = express()
const path = require('path')
const publicpath = path.resolve(__dirname,'public')
app.use(express.static(publicpath))

const PORT = 3000
const data = {
          id:1,
          name:"india"
}

app.get('/',(req,res)=>{
          res.end("WElcome to my home page")
          
})
app.get('/about',(req,res)=>{
          res.end("Welcome to my about page")
})
app.get('/weather',(req,res)=>{
          // res.end("Current weather here")
          // res.end(data)
          // res.end(JSON.stringify(data))
          res.sendFile(path.join(publicpath, 'folder', 'index.html'));
});

app.listen(PORT,()=>{
          console.log(`Server is started on PORT ${PORT}`)
})

// views

// const express = require('express')
// const app = express()
// const PORT = 3000
// app.set('view engine','pug')

// app.get('/',function(req,res){
//           // res.render('index')
//           res.render('index',{title:"Express View engine",h1:"Express App",p:"Express Template engine"})
// }).listen(PORT,()=>console.log("Server started on http localhost 3000"))

// core express

// how to create a form

// const express =require('express')
// const path = require('path')
// const app = express()
// const PORT = process.env.PORT||3000
// app.set('views',path.join(__dirname,"views"))
// app.set('view engine','pug')

// app.use(express.urlencoded({
//           extended:true
// }))
// app.get('/',(req,res)=>{
//           res.render('index',{title:"Form Handling"})
// })

// app.post("/form_submit",(req,res)=>{
//           const username = req.body.username
//           const email = req.body.email
//           res.end(`Your username is : ${username} and email is : ${email}`)
// })

// app.listen(PORT,()=>{
//           console.log("Listen to request on port 3000");
// })

// session

// const express = require('express')
// const app = express()
// const session = require('express-session')

// const PORT = process.env.PORT || 3000

// app.use(session({
//           secret:"Your Secret Key",
//           resave:true,
//           saveUninitialized:true
// }));

// app.get("/",(req,res)=>{
//           req.session.name = "Sayeed";
//           return res.send("Session Set")
// })

// app.get("/session",(req,res)=>{
//           var name = req.session.name
//           return res.send(name)
// })

// // destriy the sesssion

// app.get('/destroy',(req,res)=>{
//           req.session.destroy(function(error){
//                     console.log("Session destroyed");
//           })
//           res.end("Get lost bitch")
// })

// app.listen(PORT,()=>{
//           console.log(`Listening to request on port 3000`);
// }) 

// cookieee

// const express = require("express")
// const app = express()
// const cookies = require("cookie-parser")


// const PORT = process.env.PORT||3000

// app.use(cookies())


// app.get("/",(req,res)=>{
// res.send("Cookie example")

// })
// let users = {
//           name:"Sayeed",
//           age:"21"
// }

// app.get("/setuser",(req,res)=>{
         
//           res.cookie("userData",users)
//           res.send("User data added to cookies")
// })
// app.get("/getUser",(req,res)=>{
//           res.send(req.cookies)
// })

// app.get("/logout",(req,res)=>{
//           res.clearCookie('userData');
//           res.send("User logged out succesfully");

// })



// app.listen(PORT,()=>{
//           console.log(`Listening to port ${PORT}`)
// })