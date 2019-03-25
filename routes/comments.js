const express = require('express');
const commentsRouter = express.Router();
const CommentsService = require('../services/comments');

// POST - create 
commentsRouter.post('/comments',(req,res,next)=>{
    const{userName, timestamp}= req.body

    CommentsService.create(userName, timestamp)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        next(err)
    });
})

// GET - read 
commentsRouter.get('/comments',(req,res,next)=>{
    const{userName,timestamp}= req.body

    CommentsService.read(userName, timestamp)
    .then(data=>{
        res.json(`Comment by ${userName}e`);
    })
    .catch(err=>{
        next(err);
    })

});

//PUT - update 

commentsRouter.put('/comments',(req,res,next)=>{
    const {userName, timestamp}=req.body

    CommentsService.update(userName,timestamp)
    .then(data=>{
        res.json(`Comment by ${userName} was edited at ${timestamp}`)
    })

})
//delete