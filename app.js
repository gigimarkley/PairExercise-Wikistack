const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res,next) => {
  res.send(console.log('Hello World!'))
})
