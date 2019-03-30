const express = require('express');
const searchRouter = express.Router();
const SearchService = require('../services/search');

//create- POST
searchRouter.post('/search', (req,res,next)=>{
    const{username, id} = req.body;

    SearchService.create(username, id)
    .then(data =>{
        res.json({success: `found ${username}`})
    })
    .catch(err =>{
        next(err);
    })
});

//update- PUT
searchRouter.put('/search', (req, res, next)=>{
    const {username}= req.body
    const {id}=req.params;

    SearchService.update(id, username)
    .then(data =>{
        res.json({success: `Search for username ${userName} is being updated`})
    })
    .catch(err=>{
        next(err);
    })
})