const mongoose = require('mongoose');

const AccommodationSchema = new mongoose.Schema({
    accommodation_name: String,
    accommodation_details: String,
    accommodation_location: String,
    accommodation_price: Number,
    accommodation_reviews: String,
    accommodation_rank: Number,
    accommodation_terms: String,
    
});

module.exports = mongoose.model('Accommodation', AccommodationSchema);