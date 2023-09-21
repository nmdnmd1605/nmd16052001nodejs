const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required : true,    
    },
    year:{
        type: 'number'
    },
    book:{
        type:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book',
            }
        ]
    }
})

const Author = mongoose.model('Author',authorSchema);

const bookSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    date:{
        type: 'string',
        required: true
    },
    genres:{
        type: [String]
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Author"
    }
})
const Book = mongoose.model('Book',bookSchema);


module.exports = {Book,Author};