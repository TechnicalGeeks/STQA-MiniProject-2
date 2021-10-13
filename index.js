const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

// Data Models
const User=require("./models/user.js");
const Movie=require("./models/movie.js");
const Booking=require("./models/booking.js");

// Express App
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const dbURL = process.env.dbURL;
mongoose
	.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Database connection successful");
		app.listen(process.env.PORT, process.env.HOST);
		console.log("Listening at port " + process.env.PORT);
	})
	.catch((err) => {
		console.error("Database connection error");
		console.log(err);
	});

//register view engine
app.set("view engine", "ejs");

// 3rd party middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static("public"));


// Routers
app.get("/", (req, res) => {
	res.render("index");
});

app.get("/signUp",(req,res)=>{
	res.render("signUp")
})

app.get("/home",(req,res)=>{
	res.render("home");
})

app.post("/",(req,res)=>{
	console.log(req.body);
	User.findOne(req.body).then((result)=>{
		console.log(result);
		if(result){
			res.redirect("/home");
		}
		else{
			res.redirect("/");
		}
		
	})	
})

app.post("/signUp",(req,res)=>{
	console.log(req.body);
	newUser=new User(req.body);
	newUser.save();
	res.redirect("/");
});

app.post("/booking",(req,res)=>{
	console.log(req.body);
	newBooking=new Booking(req.body);
	newBooking.save().then((result)=>{
		res.json({msg:"Success",status:result});
	});
	
})
