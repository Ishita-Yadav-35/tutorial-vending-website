const mongoose = require("mongoose");

const connectDatabase = ( )=>{
    mongoose.connect(process.env.DB_URI)
    .then((data) =>{
        console.log('mongodb connected with server');
    })
}

module.exports = connectDatabase;