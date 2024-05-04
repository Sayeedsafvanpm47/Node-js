// router.js
const express = require('express');
const router = express.Router();

const credential = {
  email: "sayeed@gmail.com",
  password: "admin123"
}

// Login route
router.post('/login', (req, res) => {
  if (req.body.email === credential.email && req.body.password === credential.password) {
    req.session.user = req.body.email;
    res.redirect('/route/dashboard');
    
  } else {
    res.send("Invalid login credentials");
  }
});

// Dashboard route
router.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.render('dashboard', { user: req.session.user });
  } else {
    res.send("Unauthorized user");
  }
});


// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.send("Error")
    }else{
      res.render('base',{title:"Express",logout:"Logout success"})
    }
    
  });
});


module.exports = router;
