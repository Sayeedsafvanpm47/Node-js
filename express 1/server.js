const express = require('express')
const app = express()
app.set('view engine','ejs')
app.get('/',(req,res) => {
          console.log('Here')
          
          res.render('index',{text:'world'})
          // res.render('index',{text12t : 'world'})
          // res.sendStatus(500)
          // res.status(500).send("Hi sayeed")
          // res.status(500).json({message:"Error"})
          // res.download("server.js")
          // res.send('hi sayeed')
})
// so if we do like above many routes will come under the server js
// imagine if we have hundrerds od diff routes the file become huge and diff to deal with
// so router can be used, router is a way to create an instance of your app that has all of its own logic 
// applied to it and you can insert it to the main application

const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(3000)