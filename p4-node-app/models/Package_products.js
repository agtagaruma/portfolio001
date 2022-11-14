const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    body: String,
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }
});

module.exports = mongoose.model('Package_product', Package_productSchema);