const express = require('express');
const router = express.Router();

// Model
const Flight = require('../models/Flights');

// BCrypt
const bcrypt = require('bcrypt');
const { response } = require('express');

//Add/Create Accommodation
router.post('/', (request, response) =>  {
    let newFlight = new Flight (request.body);
    newFlight.save().then(result =>{
        response.send({status: "New Flight created"})
    })
})

//Display/Read all accomodations
router.get('/', (request, response)=>{
    Flight.find()
        .then(result =>{
            response.send(result)
        })
})




module.exports = router;