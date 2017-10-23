var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//Model Imports
var Campground = require("./models/campground")
var seedDB = require("./seeds");
seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.render("landing");
});
//old seed data
/*
Campground.create(
    {
        name: "Salmon Creek",
        image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg",
        description: "This is a huge granite hill, no bathrooms. No Water. Beautiful Granite."
    },function(err,campground){
        if(err){
            console.log(err);
        }else{
            console.log('new campground');
            console.log(campground);
        }
    });
    */
    







app.get("/campgrounds",function(req,res){
    //get all campgrounds from db, then render
        Campground.find({},function(err,allCampgrounds){
            if(err){
                console.log(err);
            }else{
                res.render("index",{campgrounds:allCampgrounds});
            }
        });
        
});

app.post("/campgrounds", function(req,res){
     //get data from form and add to campgrounds array
    //redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name:name,image:image,description:description};
    //create new campground and save to DB
    Campground.create(newCampground, function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
    //redirect back to campground page
    
   
});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});

//SHOW ROUTE
app.get("/campgrounds/:id", function(req,res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec( function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground)
            res.render("show",{campground: foundCampground});
        }
    });
    
    //render show template with that campground
  
});















app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The YelpCamp server has started!");
});