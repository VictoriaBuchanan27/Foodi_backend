const express = require('express');
const searchRouter = express.Router();
const SearchService = require('../services/search');

//create- POST
usersRouter.post('/', (req,res,next)=>{
    const{userName, id} = req.body;

    UsersService.create(userName, id)
    .then(data =>{
        res.json({success: `found ${userName}`})
    })
    .catch(err =>{
        next(err);
    })
});
