const mongoose = require('mongoose');

const PhysicianSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    contactNumber: String,
    clinicAffiliation: String,
    prcLicense: String,
    password: String
});

module.exports = mongoose.model('Physician', PhysicianSchema);

