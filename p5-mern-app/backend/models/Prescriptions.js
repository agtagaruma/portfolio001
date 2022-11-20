const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
    patientsProfile: [{type: mongoose.Schema.Types.ObjectId, ref: 'Patient'}],
    genericName: String,
    brandName: String,
    dosage: String,
    duration: String,
    instructions: String,
    notes: String,
    physiciansInfo: [{type: mongoose.Schema.Types.ObjectId, ref: 'Physician'}]
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);

