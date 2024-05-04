const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','hbs')
app.use('/static',express.static(path.join(__dirname,'/public')))
const items = [
{name:"Item 1",price:10},
{name:"Item 2",price:80},
{name:"Item 3",price:270},
{name:"Item 4",price:40},
{name:"Item 5",price:60}
]
app.get('/',(req,res)=>{
          res.render('index',{items,title:"Table example"})
})
app.listen(8000,()=>console.log("Server running"))