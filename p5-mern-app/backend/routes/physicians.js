const express = require('express');
const router = express.Router();

// Model
const Physician = require('../models/Physicians');

// // Creat new physicians (POST)
// router.post('/', (request, response) =>  {
//     let newPhysician = new Physician (request.body);
//     newPhysician.save().then(result =>{
//         response.send({status: "New Physician created"})
//     })
// })

//get all physicians (GET)
router.get('/', (request, response) => {
    Physician.find()
        .then(result => {
            response.send(result)
        })
})


/* Get a specific physician (GET)*/
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

// Update a physician (PUT)
router.put('/:id', ( request, response ) => {
    const PhysicianId = request.params.id;
    Physician.updateOne(
        { _id: PhysicianId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Physician has been updated" });
        }
    });
});

// Delete a physician (DELETE)
router.delete('/:id', ( request, response ) => {
    Physician.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Physician has been deleted"
            });
        }
    });
});


module.exports = router;
