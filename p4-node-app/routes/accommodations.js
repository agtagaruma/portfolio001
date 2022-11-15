const express = require('express');
const router = express.Router();

// Model
const Accommodation = require('../models/Accommodations');

// BCrypt
const bcrypt = require('bcrypt');
const { response } = require('express');

//Add/Create Accommodation
router.post('/', (request, response) =>  {
    let newAccommodation = new Accommodation (request.body);
    newAccommodation.save().then(result =>{
        response.send({status: "New Accommodation created"})
    })
})

//Display/Read all accomodations
router.get('/', (request, response)=>{
    Accommodation.find()
        .then(result =>{
            response.send(result)
        })
})




module.exports = router;