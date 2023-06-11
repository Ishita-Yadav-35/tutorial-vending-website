const mongoose = require("mongoose");

const tutorialSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter tutorial name"]
    },
    description:{
        type:String,
        required:[true, "Please enter description"]
    },
    price:{
        type:Number,
        required:[true, "Please enter tutorial price"]
    },
    rating:{
        type:Number,
        default:0
    },
    video:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    noOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    postedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Tutorials", tutorialSchema);