const express = require('express')
const events = express.Router()


events.get('/', (req,res) =>{
    res.send('index')
})
















module.exports = events
