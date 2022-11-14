const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName:  String,
    email:     String,
    password:  String,
    contactNumber:  String,
    posts: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
    ]
});

module.exports = mongoose.model('User', UserSchema);