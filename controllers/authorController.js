const {Author,Book} = require('../model/model');

const authorController = {
    // ADD Author
    addAuthor: async (req, res)=>{
        try {
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // GET ALL Author
    getallAuthor: async (req, res)=>{
        try {
            const getallAuthor = await Author.find();
            res.status(200).json(getallAuthor);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET An Author
    getAnAuthor: async (req, res)=>{
        try {
            const AnAuthor = await Author.findById(req.params.id).populate("book");
            res.status(200).json(AnAuthor);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //UPDATE An Author
    updateAnAuthor: async (req, res)=>{
        try {
            const AnAuthor = await Author.findById(req.params.id);
            await AnAuthor.updateOne({$set:req.body});
            res.status(200).json("UPDATE Thanh Cong");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE An Author
    deleteAnAuthor: async (req, res)=>{
        try {
            await Author.findByIdAndDelete(req.params.id);
            await Book.deleteMany({author:req.params.id});
            res.status(200).json("DELETE Thanh Cong");
        } catch (err) {
            res.status(500).json(err);
        }
    }

};
module.exports = authorController;