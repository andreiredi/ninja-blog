const express = require('express');
const router = express.Router();
const Post = require('../models/posts');


// getting a list of posts from db


router.get('/posts', function(req, res, next) {
    Post.find({}).then(function(posts){
        res.send(posts);
    })
});

router.get('/posts/:id', function(req, res, next) {
    Post.find({id:req.params.id}).then(function(posts){
        res.send(posts);
    })
});


// add a new post to the db


router.post('/posts', function(req, res, next) {
    Post.create(req.body).then(function(post){
        res.send(post);
    }).catch(next);
});

// update a ninja in the db

router.put('/posts/:id', function(req, res, next) {
    Post.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Post.findOne({_id:req.params.id}).then(function(post){
        res.send(post);
    })
    res.send(post);
       
    });
});

// delete a post from the db
router.delete('/posts/:id', function(req, res) {
    Post.findByIdAndRemove({_id: req.params.id}).then(function(post){
        res.send(post);
    });  
});

module.exports = router;