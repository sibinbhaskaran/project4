const express = require('express')
const events = express.Router()

const Event = require('../models/events.js')



//index route

events.get('/', (req,res) => {
    Event.find({}, (error, foundEvent) => {
        if(error) {
            res.status(400).json({ error: error.message})
        }
        res.status(200).json(foundEvent)
    })
})


//create
events.post('/', async (req,res) =>{
    Event.create(req.body, (error, createdEvent) =>{
        if(error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).send(createdEvent)
    })
})

//update
events.put('/:id', (req,res) =>{

    Event.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedEvent)=> {
        if(error) {
            res.status(400).json({ error: error.message})
        }
        res.status(200).json(updatedEvent)
    })
})

//delete

events.delete('/:id', (req,res) => {
    Event.findByIdAndRemove(req.params.id, (error,deleteEvent)=>{
        if(error) {
            res.status(400).json({ error: error.message})
        }
        res.status(200).json(deleteEvent)
    })
})










module.exports = events
