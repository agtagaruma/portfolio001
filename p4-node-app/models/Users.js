const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_lastName: String,
    user_firstName: String,
    user_email: String,
    user_contact: String,
    user_password: String
    
});

module.exports = mongoose.model('User', UserSchema);