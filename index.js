/////////////////////
//Modules and Globals
/////////////////////
require('dotenv').config() // Initiate .env file for environment variables
const express = require('express') // Instantiate express
const app = express() // Assign express constructor to a variable

///////////////////
// Express Settings
///////////////////

// Configure Express body-parser for JSON
app.use(express.json())

//////////////////////////////////
// Controllers and Routes Settings
//////////////////////////////////

// GET Endpoint for '/' or homepage
app.get('/', (req, res) => {
    res.send('Welcome to the Books API!')
})

// GET Wildcard route - MUST be at end of the list of endpoints so it doesn't override other endpoints
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 - Sorry, that page has been checked out from the library!</h1>')
})
// Keep server socket open with listening to a PORT from the .env file and log to console "I'm awake" so we know the server is open
app.listen(process.env.PORT, console.log("Reading Books on Port 3000!"))