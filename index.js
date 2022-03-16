/////////////////////
//Modules and Globals
/////////////////////

require('dotenv').config() // Initiate .env file for environment variables
const express = require('express') // Instantiate express
const app = express() // Assign express constructor to a variable
const mongoose = require('mongoose') // Assign Mongoose ODM to a variable
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, //Instantiate Mongoose to connect with MongoDB
    () => { console.log('Connected to MongoDB: ', process.env.MONGO_URI) }
  )
const cors = require('cors') // Assign Express package CORS to a variable so we can call it

///////////////////
// Express Settings
///////////////////

// Configure Express body-parser for JSON
app.use(express.json())

// Configure CORS package for our app
app.use(cors())

//////////////////////////////////
// Controllers and Routes Settings
//////////////////////////////////

// Books Controller Setup
const booksController = require('./controllers/books.js') // Assign the 'books.js' controller file to a variable so we can call it
const res = require('express/lib/response')
app.use('/books', booksController) // Anytime someone goes to the /books endpoint use our books controller file

// GET Endpoint for '/' or homepage
app.get('/', (req, res) => {
    res.send('Welcome to the Books API!')
})

// GET Wildcard route - MUST be at end of the list of endpoints so it doesn't override other endpoints
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 - Sorry, that page has been checked out from the library!</h1>')
})

// Keep server socket open with listening to a PORT from the .env file and log to console "I'm awake" so we know the server is open
app.listen(process.env.PORT, console.log("Reading Books on Port 3000!"), 80, function (){
    console.log('CORS-enabled web server listening on port 80')
})

