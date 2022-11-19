const express = require('express');
const router = express.Router();

// Model
const User = require('../models/Physicians');

// BCrypt
const bcrypt = require('bcrypt');

router.post('/register', async ( request, response ) => {
    const hashedPassword = await bcrypt.hash( request.body.password, 10 );
    const newPhysician = new Physician({
        ...request.body,
        password: hashedPassword
    });

    newUser.save().then( result => {
        response.send({ status: "Physician has been created" });
    })

});

router.post('/login', ( request, response ) => {
    User.findOne({ email: request.body.email }).then( result => {
        bcrypt.compare( request.body.password, result.password, ( err, match ) => {
            if( match ){
                // Autheticated, valid email and password
                response.send({ 
                    status: "Valid crendentials", 
                    id: result._id
                });
            }else{
                response.send({
                    status: "Invalid credentials"
                })
            }    
        });
    });
});


module.exports = router;