const express = require('express');
const router = express.Router();

// Model
const Checkout = require('../models/Checkouts');

// BCrypt
const bcrypt = require('bcrypt');

//Add/Create Checkout
router.post('/', (request, response) =>  {
    let newCheckout = new Checkout (request.body);
    newCheckout.save().then(result =>{
        response.send({status: "New Checkout created"})
    })
})

//Display/Read all checkouts
router.get('/', (request, response)=>{
    Checkout.find()
        .then(result =>{
            response.send(result)
        })
})




module.exports = router;