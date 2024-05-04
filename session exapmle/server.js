// const express = require('express')
// const app = express()
// const cookieParser = require('cookie-parser')

// // then use the cookie parser as middle ware
//  app.use(cookieParser())

// app.get("/",(req,res)=>{
//           console.log(req.cookies)
//           res.cookie('sky','blue')
//           res.cookie('grass','green',{httpOnly:true,maxAge:12000})
//           res.send("Hello")
// })

// app.listen(3000,()=>console.log("Session started"))

// csrf ex

// const express = require('express')
// const csrf=require('csrf')
// const csrfProtection = csrf({cookie : {httpOnly:true}})
// const app = express()
// const cookieParser = require("cookie-parser")

// app.use(express.urlencoded({extended:false}))
// app.use(cookieParser())


// app.get("/",(req,res)=>{
//           res.cookie("simpletest","qwert",{httpOnly:true})
//           res.send('<form action = "/transfer-money" method="POST"> <input type="text" name="amount" placeholder="amount"> <input type="text" name="to" placeholder="send to..."> <button>Submit</button> </form>')

// })

// app.post("/transfer-money",(req,res)=>{
//           if(req.cookies.simpletest === "qwerty"){
//                     res.send("Success")
//           }
//           else{
// res.send("Failed")
//           }
// })


// app.listen(3000,()=>console.log("Server started"))


 const express = require('express')
 const app = express()
 const session = require('express-session')

 app.use((session({
          secret:"secret-key",
          saveUninitialized:true,
          resave:false
 })))

 app.get("/",(req,res)=>{

 })

 app.post("/login",(req,res)=>{
          if(req.body.email===cred.email && req.body.password===cred.password)
          {
                    req.session.isAuth
          }

 })

 function signin(req,res,next){
          if()

 }

 app.get("/home",(req,res)=>{

 })