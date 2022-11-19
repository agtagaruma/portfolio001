const mongoose = require('mongoose');

const PhysicianSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    contactNumber: String,
    clinicAffiliation: String,
    prcLicense: String,
    prcScan: String

});

module.exports = mongoose.model('Physician', PhysicianSchema);

