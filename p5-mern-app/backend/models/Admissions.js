const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    contactNumber: String,
    clinicAffiliation: String,
    password: String

});

module.exports = mongoose.model('Admission', AdmissionSchema);

