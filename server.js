const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// connect to mongo
var db = require('./config/mongoose_db');

// Use Routes
app.use('/api',require('./route/api'));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));