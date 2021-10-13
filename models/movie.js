const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MovieSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    screen:{
        type: String,
        required:true
    },
    tickets:{
      silver:{
        type:String,
        required:true
      },
      gold:{
        type:String,
        required:true
      },
      platinum:{
        type:String,
        required:true
      }

    }

},{timestamps:true});

const Movie=mongoose.model('Movie',MovieSchema);

module.exports=Movie;