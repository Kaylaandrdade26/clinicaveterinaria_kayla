const express = require('express');
const app = express();

app.use(express.json());

const consultasRoutes = require('./routes/consultasRoutes');
const animaisRoutes = require('./routes/animaisRoutes');
const tutoresRoutes = require('./routes/tutoresRoutes');

app.use('/consultas', consultasRoutes);
app.use('/animais', animaisRoutes);
app.use('/tutores', tutoresRoutes);

module.exports = app;