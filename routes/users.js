const express = require('express');
const usersRouter = express.Router();
const UsersService = require('../services/users');

// POST
usersRouter.post('/', (req,res,next)=>{
    const{userName, email, firstName, lastName, id} = req.body;

    UsersService.creat(userName, email, firstName, lastName, id)
    .then(data =>{
        res.json({success: `Created New Username ${userName} with generated ID :${data.id}`})
    })
    .catch(err =>{
        next(err);
    })
});

//GET 
usersRouter.get('/:id', (req,res,next)=>{
    const {id}= req.params;

    UsersService.read(id)
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        next(err);
    })
});

//PUT - UPDATE
usersRouter.put('/:id', (req, res, next)=>{
    const {userName, firstName, email, lastName}= req.body
    const {id}=req.params;

    UsersService.update(id, userName,email, firstName, lastName)
    .then(data =>{
        res.json({success: `updated username ${userName} with ${id}`})
    })
    .catch(err=>{
        next(err);
    })
})

//DELETE 
usersRouter.delete('/',(req,res,next)=>{
    const {userName, id} = req.params

    UsersService.delete(id, userName)
    .then( data =>{
        res.json({success: `Username ${userName} and id${id} have been deleted`})
    })
    .catch(err=>{
        next(err)
    });
})
module.exports = userRouter;