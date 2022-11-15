const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    event_name: String,
    event_details: String,
    event_location: String,
    event_date: Date,
    event_terms: String     
});

module.exports = mongoose.model('Event', EventSchema);