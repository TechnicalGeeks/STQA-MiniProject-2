const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BookingSchema= new Schema({
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

const Booking=mongoose.model('booking',BookingSchema);

module.exports=Booking;