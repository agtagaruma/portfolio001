const express = require('express');
const router = express.Router();

// Model
const User = require('../models/Users');

// BCrypt
const bcrypt = require('bcrypt');

router.post('/register', async ( request, response ) => {
    const hashedPassword = await bcrypt.hash( request.body.user_password, 10 );
    const newUser = new User({
        ...request.body,
        user_password: hashedPassword
    });

    newUser.save().then( result => {
        response.send({ status: "User has been created" });
    })

});

router.post('/login', ( request, response ) => {
    User.findOne({ user_email: request.body.user_email }).then( result => {
        bcrypt.compare( request.body.user_password, result.user_password, ( err, match ) => {
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