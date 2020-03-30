require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

// const codeZip=require("./models/codeZip")        <===Primera vez ejecutar despues comentar  
// const data=require("./data/data")                <===para exportar Data
mongoose
  .connect(process.env.DB, {useNewUrlParser: true,useUnifiedTopology: true})
  .then(x => {
    // codeZip.create(data) <===Primera vez ejecutar despues comentar
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
const index = require('./routes/index');
app.use('/', index);


module.exports = app;
