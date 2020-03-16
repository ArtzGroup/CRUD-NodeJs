const express = require('express');
var route = express.Router();

var {Employee} = require('../models/employee');

route.get('/', (req, res) =>{
    Employee.find((error, data) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(req);
            res.send(data);
        }
    });
});

route.get('/:id', (req, res) =>{
    Employee.findById(req.params.id, (error, data) =>{
        if(error){
            res.sendStatus(404);
            console.log(req)
        }
        else{
            res.send(data);
        }
    });
});

route.post('/', (req, res) =>{
    var employee = new Employee({
        name: req.body.name,
        salary: req.body.salary
    });
    employee.save((error, data) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log(req);
            res.send(data);
        }
    });
});

route.put('/:id', (req, res) =>{
    var employee = {
        name: req.body.name,
        salary: req.body.salary
    }
    Employee.findByIdAndUpdate(req.params.id, {$set: employee}, {new: true}, (error, data) =>{
        if(!error)
        res.send(data)
        else
        res.sendStatus(404)
    });
});

route.delete('/:id', (req, res) =>{
    Employee.findByIdAndRemove(req.params.id, (error, data)=>{
        if(!error)
        res.send(data)
        else
        res.sendStatus(404)
    })
});

module.exports = route;