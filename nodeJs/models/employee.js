const mongoose = require('mongoose');

var Employee = mongoose.model('Employees', {
    name: {type: String},
    salary: {type: Number}
}, 'emp');

module.exports = { Employee };