const express = require('express');
const bodyParser = require('body-parser');// middeleware
const cors =require('cors');//cors- can make request from local and remote server.

//ROUTES
const commentsRoutes= require('./routes/comments')//to connect to file 
const usersRoutes = require('./routes/users')

const app = express();// creating a instance of express

const port = 3000;

 app.use(cors())
 app.use(bodyParser.json())//handling response to be in json format
 app.use(bodyParser.urlencoded({extended:false}))//url is a func. recieving an obj



app.use('/comments',commentsRoutes)
app.use('/users',usersRoutes)
app.use('/search', searchRoutes)


app.listen(port,()=>{ console.log(`listening on port ${port}`)})
