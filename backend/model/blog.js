const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

    content:{
        type: String,
        required: true,
    },

    author:{
        type: String,
    }
})

const blogModel = mongoose.model('Blog', blogSchema);
module.exports= blogModel;