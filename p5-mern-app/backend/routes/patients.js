const express = require('express');
const router = express.Router();

// Model
const Patient = require('../models/Patients');

// Create new Patient  (POST)
router.post('/', (request, response) =>  {
    let newPatient = new Patient (request.body);
    newPatient.save().then(result =>{
        response.send({status: "New Patient created"})
    })
})

//get all Patients (GET)
router.get('/', (request, response) => {
    Patient.find()
        .then(result => {
            response.send(result)
        })
})

/* Get a specific Patient (GET)*/
router.get('/:id', ( request, response ) => {
    Physician.findOne(
        { _id: request.params.id },
        { 
            password: 0
        },
    )
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});

// Update a Patient (PUT)
router.put('/:id', ( request, response ) => {
    const PatientId = request.params.id;
    Patient.updateOne(
        { _id: PatientId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Patient has been updated" });
        }
    });
});

// Delete a Patient (DELETE)
router.delete('/:id', ( request, response ) => {
    Patient.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Patient has been deleted"
            });
        }
    });
});


module.exports = router;
