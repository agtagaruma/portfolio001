const express = require('express');
const router = express.Router();

// Model
const Admission = require('../models/Admissions');

// Create new Admission
router.post('/', (request, response) =>  {
    let newAdmission = new Admission (request.body);
    newAdmission.save().then(result =>{
        response.send({status: "New Admission created"})
    })
})




//get all Admissions
router.get('/', (request, response) => {
    Admission.find()
        .then(result => {
            response.send(result)
        })
})

/* Get a specific Admission */
router.get('/:id', ( request, response ) => {
    Admission.findOne(
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

// Update a Patient
router.put('/:id', ( request, response ) => {
    const AdmissionId = request.params.id;
    Admission.updateOne(
        { _id: AdmissionId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Admission has been updated" });
        }
    });
});

// Delete a Admission
router.delete('/:id', ( request, response ) => {
    Admission.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Admission has been deleted"
            });
        }
    });
});


module.exports = router;
