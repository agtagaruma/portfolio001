const express = require('express');
const router = express.Router();

// Model
const Package = require('../models/Packages');

// BCrypt
const bcrypt = require('bcrypt');
const { response } = require('express');

//Add/Create Accommodation
router.post('/', (request, response) =>  {
    let newPackage = new Package (request.body);
    newPackage.save().then(result =>{
        response.send({status: "New Package created"})
    })
})

//Display/Read all accomodations
router.get('/', (request, response)=>{
    Package.find()
        .then(result =>{
            response.send(result)
        })
})




module.exports = router;