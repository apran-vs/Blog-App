const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    imgURL:{
        type:String,
        require:true
    },
    Discription:{
        type:String,
        require:true
    },
    DateOfBlog:{
        type:Date,
        require:true
    }
})

const BlogDB = mongoose.model('blogdb',schema);

module.exports = BlogDB;