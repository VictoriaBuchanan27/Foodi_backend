const express = require('express');
const usersRouter = express.Router();
const UsersService = require('../services/users');

usersRouter.post('/', (req,res,next)=>{
    const{userName, email, firstName, lastName, id} = req.body;

    UsersService.creat(userName, email, firstName, lastName, id)
    .then(data =>{
        res.json({success: `Created New Username ${userName} with generated ID :${data.id}`})
    })
})