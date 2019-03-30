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

//DELETE 
searchRouter.delete('/search',(req,res,next)=>{
    const {username} = req.params

    SearchService.delete(id, username)
    .then( data =>{
        res.json({success: `Username ${userName} for search has been deleted`})
    })
    .catch(err=>{
        next(err)
    });
})
module.exports = searchRouter;