const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    contactNumber: String,
    gender: String,
    birthdate: Date,
    address: String,
    vitalSigns: Object

});

module.exports = mongoose.model('Patient', PatientSchema);

