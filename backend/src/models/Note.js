const mongoose =  require("mongoose");

const noteSchema = new mongoose.Schema({
    content:{
        Type:String,
        required:true
    },
    isCompeleted:{
        Type:Boolean,
        default :false
    },
    user:{
        Type:mongoose.Schema.Types.ObjectId,
        ref: "User" ,
          required:true
    },

},{timestamps});

const Note = mongoose.model("Note",noteSchema);
module.exports = Note;