const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003;

const mongoose = require('mongoose')

// connections
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/events';
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

  });
  mongoose.connection.once("open", () => {
    console.log("connected to mongoose...");
  });
//middleware
app.use(express.json());


//controllers
const eventsController = require('./controllers/events_controller.js')
app.use('/events', eventsController)






app.listen(PORT, () =>{
    console.log('Listening to',PORT )
})