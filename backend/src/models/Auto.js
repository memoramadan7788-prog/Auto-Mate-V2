const mongoose =  require("mongoose");

const autoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    isCompeleted:{
        type:Boolean,
        default :false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User" ,
          required:true
    },

}, {timestamps: true})

const Auto= mongoose.model("Auto",autoSchema);
module.exports = Auto;