const {Book,Author} = require('../model/model');

const bookController ={
    // ADD A BOOK
    AddABook:async(req,res)=>{
        try {
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            if(req.body.author){
                const author = Author.findById(req.body.author);
                await author.updateOne({$push: {book:saveBook._id}});
            }
            res.status(200).json(saveBook);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET ALL BOOKs

    GetAllBooks:async(req,res)=>{
        try {
            const GetAllBooks =  await Book.find();
            res.status(200).json(GetAllBooks);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET A BOOk

    getABook:async(req,res)=>{
        try {
            const ABook =await Book.findById(req.params.id).populate("author");
            res.status(200).json(ABook);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // UPDATE A BOOK
    updateABook:async(req,res)=>{
        try {
            const ABook = await Book.findById(req.params.id); 
            await ABook.updateOne({$set: req.body});
            res.status(200).json("UPDATE Thanh Cong");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE A BOOK
    deleteABook:async(req,res)=>{
        try {
            await Author.updateMany({book:req.params.id},{$pull:{book:req.params.id}});
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("DELETE Thanh Cong");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = bookController;