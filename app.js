const express = require('express');
const app = express();
const conn = require('./config/db');

app.use(express.json());

app.listen(3000);