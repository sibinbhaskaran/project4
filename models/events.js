const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({


    location: String,
    description: String,
    image: String,
    user_name: String,
    date: { type: Date, default: Date.now},

});



module.exports = mongoose.model('Event', eventSchema)

// curl -X POST -H "Content-Type: application/json" -d '{"location":"test", "description":"test", "image":"test"}' http://localhost:3003/events
// curl -X PUT -H "Content-Type: application/json" -d '{"location":"new", "description":"new", "image":"new"}' http://localhost:3003/events/5f2f39629e30aa8deddcc30d