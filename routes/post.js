const express = require('express');
const postRouter = express.Router();
const PostService = require('../services/cities');

// POST - CREATE 
postRouter.post('/id:post', (req,res,next)=>{
    const {userName, id , location, timestamp} = req.body
    PostService.create(userName, id, location, timestamp)
    .then(data=>{
        res.json("new post add")
    })
    .catch(err=>{
        next(err);
    })
})

// GET - READ
postRouter.get('/id:post',(req, res,next)=>{
    const{userName, location} =req.params
    PostService.read(userName, location, timestamp)
    .then(data=>{
        res.json()
    })
    .catch(err=>{
        next(err)
    })
})

// PUT - UPDATE
postRouter.put('/id:post',(req, res, next)=>{
    const {userName,timestamp}=req.body
    PostService.put(userName,timestamp)
    .then(data=>{
        res.json(`Username ${userName} updated at ${timestamp}`)
    })
    .catch(err=>{
        next(error)
    })
})

// DELETE - DELETE
postRouter.delete('/id:post',(req,res,next)=>{
    const {userName,id}=req.params
    PostService.delete(userName,id)
    .then(data=>{
        res.json(`Username ${userName} with ${id} was deleted`)
    })
    .catch(err=>{
        next(err)
    })
})