const mongoose = require('moongoose')
const NotesSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description:{
        type:String,
        required : true
    },
    tag:{
        type:String,
        default : "General"
    },
    date:{
        type:String,
        default:Date.now
    }
})
module.exports = {'NoteSchema' : NoteSchema};