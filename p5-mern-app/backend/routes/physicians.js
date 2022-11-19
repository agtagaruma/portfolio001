const express = require('express');
const router = express.Router();

// Model
const User = require('../models/Physicians');

//get all user
router.get('/', (request, response) => {
    Physician.find()
        .then(result => {
            response.send(result)
        })
})

/* Get a specific user */
router.get('/:id', ( request, response ) => {
    User.findOne(
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

// Update a user
router.put('/:id', ( request, response ) => {
    const PhysicianId = request.params.id;
    User.updateOne(
        { _id: PhysicianId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Physician has been updated" });
        }
    });
});

// Delete a user
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


//display accomdation of a user
// router.get('/:id/show-accommodation', ( request, response ) => {
//     User.findOne(
//         { _id: request.params.id })
//     .populate('accommodation')
//     .then( (result) => {
//         console.log( result );
//         if( typeof result === 'object' ){
//             response.send( result );
//         }
//     });
// });


module.exports = router;
