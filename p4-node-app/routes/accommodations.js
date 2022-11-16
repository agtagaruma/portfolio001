const express = require('express');
const router = express.Router();

// Model
const Accommodation = require('../models/Accommodations');

// BCrypt
const bcrypt = require('bcrypt');
const { response, request } = require('express');

//Add/Create Accommodation
router.post('/', (request, response) =>  {
    let newAccommodation = new Accommodation (request.body);
    newAccommodation.save().then(result =>{
        response.send({status: "New Accommodation created"})
    })
})

//Display specific accomodation
router.get('/:id', (request, response) => {
    Accommodation.findOne(
        {_id: request.params.id}
    ).then((result)=> {
        response.send(result)
    })
})

//Display all accomodations
router.get('/', (request, response)=>{
    Accommodation.find()
        .then(result =>{
            response.send(result)
        })
})


// Update a accommodation
router.put('/:id', ( request, response ) => {
    const accommodationId = request.params.id;
    Accommodation.updateOne(
        { _id: accommodationId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Accommodation has been updated" });
        }
    });
});

// Delete a accommodation
router.delete('/:id', ( request, response ) => {
    Accommodation.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Accommodation has been deleted"
            });
        }
    });
});




module.exports = router;