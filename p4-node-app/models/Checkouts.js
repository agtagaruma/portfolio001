const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema({
    user_ID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    accommodation_ID: {type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation'},
    checkIn: {type: Date, default: Date.now},
    checkOut: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Checkout', CheckoutSchema);