const express = require('express');
const router = express.Router();

// Model
const Post = require('../models/Posts');

router.get('/:id', ( request, response ) => {
    Post.findOne({ _id: request.params.id })
    .populate('author', 'email')
    .then( result => {
        if( typeof result === 'object' ){
            response.send( result );
        }
    });

    /* 
        populate here only returns ID and email
    */
});

/* Return all comments on a certain post */
router.get('/:id/comments', ( request, response ) => {
    Post.findOne(
        { _id: request.params.id },
        { comments: 1 }
    )
    .populate('comments')
    .then( result => {
        if( typeof result === 'object' ){
            response.send( result );
        }
    });

    /* 
        populate here only returns ID and email
    */
});

// Create a new post
router.post('/', ( request, response ) => {
    let newPost = new Post( request.body );
    newPost.save().then( result => {
        response.send({ status: "New post created" });
    });
});

// Update a post
router.put('/:id', ( request, response ) => {
    const postId = request.params.id;
    Post.updateOne(
        { _id: postId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "Post has been updated" });
        }
    });
});

// Delete a post
router.delete('/:id', ( request, response ) => {
    Post.deleteOne({ _id: request.params.id })
    .then( result => {
        if( result.deletedCount === 1 ){
            response.send({
                status: "Post has been deleted"
            });
        }
    });
});

module.exports = router;