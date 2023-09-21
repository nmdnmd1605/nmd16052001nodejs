const express = require('express');
const cors = require('cors');

var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const data = require('./config/connetdatabase');
const app = express();
const port = 1605;
const routerAuthor = require("./router/author");
const routerBook = require("./router/book");

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));
app.get('/tho', (req, res) => {
  res.status(200).json('Hello World!');
})

data.connet();

// RouterAuthor

app.use('/author',routerAuthor);

// RouterBook

app.use('/book',routerBook);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})