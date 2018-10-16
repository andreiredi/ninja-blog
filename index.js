const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const cors = require('cors');

const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
// set up express blog app
const app = express();

app.use(cors());

app.use(jwt());

// connect to mongodb
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());



app.use('/users', require('./users/users.controller'));

app.use(errorHandler);

// routes

app.use('/api', require('./routes/api'));

// error handling middleware
/*
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(418).send({error:err.message});
}); 

*/
// listen for request

app.listen(4000, function() {
    console.log('now listening for requests');
});