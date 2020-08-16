const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3003;
require("dotenv").config();

// node cron
const CronJob = require('cron').CronJob
const Event = require('./models/events.js')
const moment = require('moment')


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
app.use(express.static('public'));
app.use(express.json());


const whitelist = ['http://localhost:3000', 'https://eventstoactivity.herokuapp.com'];
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

// //automatic delete post

let deleteSch = new CronJob('5 * * * * *', function(){
  console.log("schedule initiated")
  return userDelete();
});
deleteSch.start();


userDelete = ()=>{
  //  //let todayDate = new Date()
  //  //todayDate.setHours(todayDate.getHours()-1)
  // //todayDate.setMinutes(todayDate.getMinutes()-3)
 let todayDate = moment().subtract(1,"hour");
 console.log(todayDate + "first")
 todayDate = moment.utc(todayDate).format();
 console.log(todayDate)


   Event.deleteMany({ created_at: {$lte: todayDate}},
   
    (error)=>{
      if(error) return console.log("Failed to delete the suggestion" + error);
      console.log("Deleted the suggestions")
      
    })
}





 


//




app.listen(PORT, () =>{
    console.log('Listening to',PORT )
})