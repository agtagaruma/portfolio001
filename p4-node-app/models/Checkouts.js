const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema({
    user_ID: String,
    package_ID: String,
    accommodation_ID: String,
    flight_ID: String,
    event_ID: String,
    accommodation_duration: Date,
    flight_dates: Date
    
});

module.exports = mongoose.model('Checkout', CheckoutSchema);