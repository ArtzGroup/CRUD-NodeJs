const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');

var app = express();
var employeeController = require('./controllers/emplyeeController');
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log("server started 3000"));

app.use('/employees', employeeController)