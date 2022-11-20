const express = require('express');
const router = express.Router();

// Model
const Prescription = require('../models/Prescriptions');

// Create new Prescription (POST)
router.post('/', (request, response) =>  {
    let newPrescription = new Prescription (request.body);
    newPrescription.save().then(result =>{
        response.send({status: "New Prescription created"})
    })
})

/* Get a specific Prescription (GET) */
router.get('/:id', ( request, response ) => {
    Prescription.findOne(
        { _id: request.params.id },
        { 
            password: 0
        })
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});

/* Get all prescriptions of a specific Prescription (GET) */
router.get('/:id/prescriptions', ( request, response ) => {
    Prescription.find(
        { _id: request.params.id },
        { 
            prescriptions: 1
        })
    .populate('patientsProfile')
    .populate('physiciansInfo')
    .exec( (error, result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});


// Update a Prescription (PUT)
router.put('/:id', ( request, response ) => {
    const PrescriptionId = request.params.id;
    Prescription.updateOne(
        { _id: PrescriptionId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Prescription has been updated" });
        }
    });
});

// Delete a user (DELETE)
router.delete('/:id', ( request, response ) => {
    Prescription.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Prescription has been deleted"
            });
        }
    });
});


module.exports = router;
