const express = require('express')
const morgan=require('morgan')
const {v4:uuidv4} = require('uuid')
const fs = require('fs')

const app = express()
const port=3000
// app.use(morgan('combined'))
// app.use(morgan('tiny'))
// app.use(morgan(':method'))
// app.use(morgan(':method:status'))
// app.use(morgan(':method:status:url'))
morgan.token('id',function getid(req){
          return req.id
})
morgan.token('param',function(req,res,param){
          return "userToken"
})
app.use(assign)
// app.use(morgan(':method:status:url"HTTP/:http-version"'))
// app.use(morgan(':id:method:status:url"HTTP/:http-version"'))
app.use(morgan(':id:param:method:status:url"HTTP/:http-version"'))
app.get('/',(req,res)=>{
          res.end("Morgan logger app")
})
function assign(req,res,next){
          req.id = uuidv4()
          next()
}
app.listen(port,()=>console.log("Server running on 3000"))