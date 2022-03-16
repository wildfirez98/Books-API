const mongoose = require('mongoose')

// Create our default book schema for MongoDB
const bookSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String},
    year: { type: Number},
    quantity: { type: Number},
    imageURL: {type: String, default:'https://picsum.photos/200' },
})

// Export our book schema to a model called Book so we can call on it thru out our app
module.exports = mongoose.model('Book', bookSchema)