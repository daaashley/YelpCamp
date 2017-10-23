var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//Index - show all campgrounds
router.get("/",function(req,res){
    console.log(req.user);
    //get all campgrounds from db, then render
        Campground.find({},function(err,allCampgrounds){
            if(err){
                console.log(err);
            }else{
                res.render("campgrounds/index",{campgrounds:allCampgrounds,currentUser: req.user});
            }
        });
        
});

//create route
router.post("/",isLoggedIn, function(req,res){
     //get data from form and add to campgrounds array
    //redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name:name,image:image,description:description,author:author};
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

//new campground route
router.get("/new", isLoggedIn,function(req,res){
    res.render("campgrounds/new",{currentUser:req.user});
});

//SHOW ROUTE
router.get("/:id", function(req,res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec( function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground)
            res.render("campgrounds/show",{campground: foundCampground});
        }
    });
    
    //render show template with that campground
  
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;