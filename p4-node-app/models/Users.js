const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_lastName: String,
    user_firstName: String,
    user_email: String,
    user_contact: String,
    user_password: String,
    flight: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
    accommodation: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation'}],
    event: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
});

module.exports = mongoose.model('User', UserSchema);