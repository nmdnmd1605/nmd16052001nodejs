const mongoose = require('mongoose')
const connet= async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/Apifirs');
        console.log('Thanh Cong');
    }
    catch(err){
        console.log('That bai');
    }
}
module.exports = {connet};