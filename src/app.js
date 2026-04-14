const express = require('express');
const app = express();

app.use(express.json());

const consultasRoutes = require('./routes/consultaroutes');  
const animaisRoutes = require('./routes/animaisroutes');     
const tutoresRoutes = require('./routes/tutoresroutes');     

app.use('/consultas', consultasRoutes);
app.use('/animais', animaisRoutes);
app.use('/tutores', tutoresRoutes);

module.exports = app;