const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true }, (err) =>{
    if(!err){
        console.log("successful");
    }
    else{
        console.log('error' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;