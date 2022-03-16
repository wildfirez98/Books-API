const books = require('express').Router() // Assign our Express router to a variable so we can call it 
const Book = require('../models/books.js')

// Seed Data - Comment out after initial population
//books.get('/seed', (req, res) => {
//    Book.insertMany([{
//        "title": "The Shinobi Initiative",
//        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//        "year": 2014,
//        "quantity": 10,
//        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
//      },
//      {
//        "title": "Tess the Wonder Dog",
//        "description": "The tale of a dog who gets super powers",
//        "year": 2007,
//        "quantity": 3,
//        "imageURL": "https://imgur.com/cEJmGKV.jpg"
//      },
//      {
//        "title": "The Annals of Arathrae",
//        "description": "This anthology tells the intertwined narratives of six fairy tales.",
//        "year": 2016,
//        "quantity": 8,
//        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
//      },
//      {
//        "title": "W∀RP",
//        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
//        "year": 2010,
//        "quantity": 4,
//        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
//      }])
//        .then(res.status(200).json({
//            message: 'Seed successful'
//        }))
//        .catch(res.status(400).json({
//            message: 'Seed unsuccessful'
//        }))
//})

// GET - Index Route
books.get('/', (req, res) => {
    Book.find()
    .then((foundBooks) => {
        res.json({ foundBooks })
    })
    .catch(err => {
        console.log(err)
        res.json('err', err)
    })
})

// GET - Individual Book endpoint route
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then((foundBook) => {
        res.json({ foundBook })
    })
    .catch(err => {
        console.log(err)
        res.json('err', err)
    })
})

// PUT - Update a specific book route
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.json(`/books/${req.params.id}`)
    })
    .catch(err => {
        res.json('err', err)
    })
})


// DELETE - Destroy a specific book route :)
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => {
        res.json(`${req.params.id} successfully deleted`)
    })
    .catch(err => {
        res.json('err', err)
    })
})

// POST - Create the book route
books.post('/', (req, res) => {
    Book.create(req.body)
    .then(() => {
        console.log(req.body)
        res.json(req.body)
    })
    .catch(err => {
        console.log('err', err)
        res.json(err)
    })
})




module.exports = books // Export our router variable so its available thru out our app