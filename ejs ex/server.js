const express = require('express');
const app = express();
const port = 3100;
const path = require('path')

app.set('view engine', 'ejs');
app.use('/static',express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
  res.render('index',{title:"List of items"});
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
