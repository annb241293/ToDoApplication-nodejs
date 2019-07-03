const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');


const port = 8888;
const toDoController = require('./controller/toDoController');

//create a schema

// var firstItem = ToDo({item:'go to school'}).save(function(err){
//     if(err) throw err
//     console.log('ok')
// })

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

toDoController(app);
app.listen(port, function () {
    console.log('Server is running on PORT',port);
    // console.log(process.env.port)
});
