const mongoose = require('mongoose');

const PhysicianSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    contactNumber: String,
    clinicAffiliation: String,
    prcLicense: String,
    prcScan: String,
    // flight: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
    // accommodation: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation'}],
    // event: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]

});

module.exports = mongoose.model('Physician', PhysicianSchema);

