const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv/config');
const postRoutes = require('./routes/post');
const loginRoutes = require('./routes/login');
const parser = require('body-parser')


let app = express();
app.use(parser.json())
app.use('/posts', postRoutes)
app.use('/login', loginRoutes)

//middleware add the /posts prefix to the route so yo don't need to add '/posts' to post endpoint
//middleware does the "buesness logic" before page rending
// flase -> querystring 
// true --> qs linrary - allows to created nested objects while querystring does not.
// Routes
// middleware 

// Before the posts route render the middleware lunches
// app.use('/posts', () => {
// 	console.log("Middle bitch is running")
// })
app.get('/', (req,res) => {
	res.end("Welcome ")
})

mongoose.connect(process.env.DB_CONNECTIONS,  { useNewUrlParser: true, useUnifiedTopology: true },  () => {
	console.log("connected to db")
})
// app.use(express.)
app.listen(3000)
