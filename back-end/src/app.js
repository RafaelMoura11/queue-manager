const express = require('express');
const router = require('./router');
const app = express()
const db = require('./database/models')

app.use(express.json())
app.use(router)

module.exports = app