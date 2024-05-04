// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse incoming JSON data
// app.use(express.json());

// // Sample data (simulating an item in inventory)
// let item = {
//   name: "widget",
//   quantity: 10
// };

// // Route to update the item's quantity
// app.put('/update', (req, res) => {
//   const { quantity } = req.body;

//   // Check if the quantity is valid
//   if (quantity === undefined || typeof quantity !== 'number') {
//     return res.status(400).send('Invalid quantity value');
//   }

//   // Update the item's quantity
//   item.quantity = quantity;

//   // Respond with a success message
//   res.send(`Item quantity updated to ${quantity}`);
// });

// app.listen(port, () => console.log(`Server listening on port ${port}`));

const express = require('express');
const app = express();
const PORT = 3000;

const student = express.Router();
app.use('/student', student);

student.get('/profile/:start/:end', function (req, res) {
  console.log('starting page: ', req.params['start']);
  console.log('ending page: ', req.params['end']);
  res.send();
});

app.listen(PORT, () => console.log("Listening to port 3000"));

