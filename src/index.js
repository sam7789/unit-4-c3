const express = require('express');
const userControllers = require('./controllers/user.controller');

const app = express();
app.use(express.json());

app.use("users",userControllers)

module.exports = app;