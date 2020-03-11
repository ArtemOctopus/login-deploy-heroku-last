const express = require('express');
const app = express()
const authRoutes = require('./routes/auth')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const path = require('path');


mongoose.connect(keys.MONGO_URI)
  .then(()=> console.log('mongo connected'))
  .catch(error => console.log(error))

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/auth', authRoutes)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
module.exports = app
