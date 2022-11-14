const express = require('express');
const router = express.Router();

// Model
const Comment = require('../models/Comments');

// Create a new comment
router.post('/', ( request, response ) => {
    let newComment = new Comment( request.body );
    newComment.save().then( result => {
        response.send({ status: "New comment posted" });
    });
});

// Update a comment
router.put('/:id', ( request, response ) => {
    const commentId = request.params.id;
    Comment.updateOne(
        { _id: commentId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Comment has been updated" });
        }
    });
});

// Delete a comment
router.delete('/:id', ( request, response ) => {
    Comment.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Comment has been deleted"
            });
        }
    });
});


module.exports = router;