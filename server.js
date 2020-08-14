const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3003;
require("dotenv").config();



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


const whitelist = ['http://localhost:3000', 'https://eventstoactivity.herokuapp.com/'];
const corsOptions = {
  origin: (origin, callback) => {
    console.log('origin',origin)
    if (whitelist.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));


//controllers
const eventsController = require('./controllers/events_controller.js')
app.use('/events', eventsController)






app.listen(PORT, () =>{
    console.log('Listening to',PORT )
})