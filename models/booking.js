const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MovieSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    movie:{
      type: String,
      required:true
    },
    numTicket:{
      type: String,
      required:true
    }

},{timestamps:true});

const Movie=mongoose.model('Movie',MovieSchema);

module.exports=Movie;