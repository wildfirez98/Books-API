const books = require('express').Router() // Assign our Express router to a variable so we can call it 



books.get('/', (req, res) => {
  res.json({})
  console.log('Displaying the books index in JSON')
})









module.exports = books // Export our router variable so its available thru out our app