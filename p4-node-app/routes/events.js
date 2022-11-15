const express = require('express');
const router = express.Router();

// Model
const Event = require('../models/Events');

// BCrypt
const bcrypt = require('bcrypt');
const { response } = require('express');

//Add/Create Accommodation
router.post('/', (request, response) =>  {
    let newEvent = new Event (request.body);
    newEvent.save().then(result =>{
        response.send({status: "New Event created"})
    })
})

//Display/Read all accomodations
router.get('/', (request, response)=>{
    Event.find()
        .then(result =>{
            response.send(result)
        })
})




module.exports = router;