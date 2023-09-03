const express = require('express')
const app = express();
const getUsers = require('./user.controller.js')

app.get('/users',getUsers);




module.exports = app;