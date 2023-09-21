const routes = require('express').Router();

const bookController = require('../controllers/bookController');

//ADD A BOOK
routes.post('/',bookController.AddABook);

// GET ALL BOOKs

routes.get('/',bookController.GetAllBooks);

// Get A Book

routes.get('/:id',bookController.getABook);

// UPDATE A Book
routes.put('/:id',bookController.updateABook);

// DELETE A Book
routes.delete('/:id',bookController.deleteABook);

module.exports = routes;