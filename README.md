# EVENTS

## USER STORIES

* Homepage shows the current news of the region
* Option to change the location and home shows current location news
* Search option to search for events as per user query
* Nav link to a form where user can put reccommdation for events ,location ,parks which is open during pandemic 
* User inputs shows up 

## Features

* Using 2 third party API one for rendering the news and other for searching events
* Will use AXIOS to call API data

## EventsFinder

### Heroku : https://eventstoactivity.herokuapp.com/
### Heroku backend: https://eventfinderapi.herokuapp.com/
### Github: https://github.com/sibinbhaskaran/eventsfinder


#### Technologies Used:
* Node.js
* Mongoose
* Mongo db
* Express
* React
* styling : Bootstrap and CSS
* Axios 
* Geolocation - for finding user location co-ordinates
* Moment.js 
* Node-Cron

### 3rd party API used:
* https://openweathermap.org/api
* https://developer.ticketmaster.com/
* https://newscafapi.p.rapidapi.com/apirapid/news/

### Features

###### This application finds the events based on location search and user can also post their suggestion so that other user can see. In the home page the news is shown along with local weather based on co-ordinateds of user location(npm package -Geolocation).  The data posted by user in suggestion gets deleted by automatically after 15 days (npm package:Node-crode)
