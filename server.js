const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const wishlist = [];

app.post('/addToWishlist', (req, res) => {
  const productName = req.body.productName;
  wishlist.push(productName);
  res.sendStatus(200);
});

app.get('/wishlist', (req, res) => {
  res.json(wishlist);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
