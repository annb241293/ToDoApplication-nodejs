const mongoose = require('mongoose');
//connect db
mongoose.connect('mongodb+srv://admin241293:binhan12@cluster0-hpsvl.mongodb.net/ToDoApp?retryWrites=true&w=majority');

// const toDoSchema = new mongoose.Schema({
//     item:String,
//     size:Number
// });

const toDoSchema2 = new mongoose.Schema({
    item:String,
    size:Number,
    abc:String
});

// var ToDo = mongoose.model('todo',toDoSchema);
var ToDo2 = mongoose.model('todo',toDoSchema2);

module.exports = function(app){
    app.get('/todo',function(req,res){
        ToDo2.find({},function(err,data){
            if(err) throw err
            res.render('index',{data:data})
        })
        // res.render('index',{data});
        
    })

    app.post('/todo',function(req,res){
        let item = req.body.item;
        console.log(item)
        let insertItem = ToDo2({item:item}).save(function(err,data){
            if(err) throw err
            console.log('insert ok')
            // res.render('index',{data:data})
            res.json(data)
        })
        // data.push(req.body);
        // res.render('index',{data});
        // res.json(data);
        // console.log(req.body);
    })

    app.delete('/todo/:item',function(req,res){
        let item = req.params.item;
        console.log(item)
        ToDo2.find({item:item}).remove(function(err,data){
            if(err) throw err
            console.log('remove ok')
            // res.render('index',{data:data})
            res.json(data);
        })
        
        // res.json(data);
        // console.log(req.body);
    })

    
}