const express = require('express')
const app = express()
const port = 5001
const bodyParser = require ('body-parser');

const db = require('../db/index.js');



app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());



app.get('/product/:isbn13', (req, res) => {
  console.log("ISBN:", req.params.isbn13);
  db.ProductDetails.findOne({isbn13: req.params.isbn13})

  .then ((record)=> {
    console.log("record is", record);
    if (record === null) {
      throw 'Record not found or isbn is not valid';
    } else {
    res.status(200).send(record);
    }
  })
  .catch((error)=> {
    console.log(error);
    res.status(500).send(error);
  })
});

app.use(express.static(__dirname + '/../client/dist'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})