const express = require('express')
const app = express()

app.set('view engine','pug')

app.get('/',(req,res)=>{
res.render('index',({title:"Card example"}))
})
app.listen(3000,()=>console.log("Server started"))