const express = require('express');
const postRouter = express.Router();
const PostService = require('../services/cities');

// POST - CREATE 
postRouter.post('/id:post', (req,res,next)=>{
    const {userName, id , location} = req.body
    PostService.create(userName, id, location)
    .then(data=>{
        res.json()
    })
    .catch(err=>{
        next(err);
    })
})

// GET - READ
postRouter.get('/id:post',(req, res,next)=>{
    const{userName, location} =req.params
    PostService.read(userName, location)
    .then(data=>{
        res.json()
    })
    .catch(err=>{
        next(err)
    })
})

// PUT - UPDATE
postRouter.put('/id:post',(req, res, next)=>{

})

// DELETE - DELETE
postRouter.delete('/id:post',(req,res,next)=>{

})