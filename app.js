const express = require('express');
const app = express();
const conn = require('./config/db');
const bahanRoute = require('./route/BahanRoute')
const personalisasiRoute = require('./route/PersonalisasiRoute')
const resepRoute = require('./route/ResepRoute')
const tagBahanRoute = require('./route/TagBahanRoute')

app.use(bahanRoute);
app.use(personalisasiRoute);
app.use(resepRoute);
app.use(tagBahanRoute);


app.listen(3000);
