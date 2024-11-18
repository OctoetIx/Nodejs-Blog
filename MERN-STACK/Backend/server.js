const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');



//express app
const app = express();
const workOutRoute = require('./routes/workout');

// middleware
app.use('/api/workouts', workOutRoute);
app.use(express.json());

// Connect to Db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    // listen for request
app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port' , process.env.PORT)
    })
})
.catch((e) =>{
    console.log(e)
})

