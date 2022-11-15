const mongoose = require('mongoose');

const AccommodationSchema = new mongoose.Schema({
    flight_name: String,
    flight_details: String,
    flight_departure: Date,
    flight_arrival: Date,
    flight_origin: String,
    flight_destination: String,
    flight_returnDeparture: Date,
    flight_returnArrival: Date,
    flight_returnOrigin: String,
    flight_returnDestination: String,
    flight_price: Number,
    flight_terms: String
    
});

module.exports = mongoose.model('Accommodation', AccommodationSchema);