const mongoose = require("mongoose");
const cors = require("cors") 
const express = require('express');

const app = express()

const PORT = 5004

app.use(express.json())
app.use(cors())
app.use('/api',require('./src/routes/index'));

const uri = 'mongodb+srv://maliksonam0301:f6v6fZQkQlNw3zot@cluster0.ycy20ar.mongodb.net/';

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })