const express = require('express')
const app = express()
const session = require('express-session')


app.use(express.json())
app.use(session({
          secret:'secretKey',
          resave:false,
          saveUninitialized:false,
}))