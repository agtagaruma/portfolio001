const express = require('express');
const router = express.Router();

// Model
const Flight = require('../models/Flights');

// BCrypt
const bcrypt = require('bcrypt');

//Add/Create Flight
router.post('/', (request, response) =>  {
    let newFlight = new Flight (request.body);
    newFlight.save().then(result =>{
        response.send({status: "New Flight created"})
    })
})

//Display/Read all Flights
router.get('/', (request, response)=>{
    Flight.find()
        .then(result =>{
            response.send(result)
        })
})

// Update a Flight
router.put('/:id', ( request, response ) => {
    const flightId = request.params.id;
    Flight.updateOne(
        { _id: flightId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Flight has been updated" });
        }
    });
});

// Delete a Flight
router.delete('/:id', ( request, response ) => {
    Flight.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Flight has been deleted"
            });
        }
    });
});





module.exports = router;