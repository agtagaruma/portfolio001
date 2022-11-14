const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    body:  String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes:    Number,
    dislikes: Number,
    comments: [
        { type: mongoose.Schema.Types.ObjectId , ref: 'Comment' }
    ]
});

module.exports = mongoose.model( 'Post', PostSchema );