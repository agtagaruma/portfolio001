const express = require('express');
const router = express.Router();

// Model
const Event = require('../models/Events');

// BCrypt
const bcrypt = require('bcrypt');
const { response } = require('express');

//Add/Create Event
router.post('/', (request, response) =>  {
    let newEvent = new Event (request.body);
    newEvent.save().then(result =>{
        response.send({status: "New Event created"})
    })
})

//Display/Read all Events
router.get('/', (request, response)=>{
    Event.find()
        .then(result =>{
            response.send(result)
        })
})


// Update an Event
router.put('/:id', ( request, response ) => {
    const eventId = request.params.id;
    Event.updateOne(
        { _id: eventId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Event has been updated" });
        }
    });
});

// Delete an Event
router.delete('/:id', ( request, response ) => {
    Event.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Event has been deleted"
            });
        }
    });
});







module.exports = router;