const router = require('express').Router();

const authorController = require('../controllers/authorController');
//ADD Author
router.post("/",authorController.addAuthor);

//GET ALL Author
router.get("/",authorController.getallAuthor);

// GET AN Author

router.get("/:id",authorController.getAnAuthor);

// UPDATE Author 

router.put('/:id',authorController.updateAnAuthor);

//DELETE Author

router.delete('/:id',authorController.deleteAnAuthor);

module.exports = router;