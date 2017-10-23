var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.render("landing");
});

var campgrounds = [
        {name: "Salmon Creek", image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"},
        {name: "Camp DePaul", image: "https://media-cdn.tripadvisor.com/media/photo-s/05/c6/94/80/red-squirrel-campsite.jpg"},
        {name: "Winona Falls", image: "https://boyslifeorg.files.wordpress.com/2014/04/tent-featured.jpg?w=620&h=465"},
         {name: "Salmon Creek", image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"},
        {name: "Camp DePaul", image: "https://media-cdn.tripadvisor.com/media/photo-s/05/c6/94/80/red-squirrel-campsite.jpg"},
        {name: "Winona Falls", image: "https://boyslifeorg.files.wordpress.com/2014/04/tent-featured.jpg?w=620&h=465"},
         {name: "Salmon Creek", image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg"},
        {name: "Camp DePaul", image: "https://media-cdn.tripadvisor.com/media/photo-s/05/c6/94/80/red-squirrel-campsite.jpg"},
        {name: "Winona Falls", image: "https://boyslifeorg.files.wordpress.com/2014/04/tent-featured.jpg?w=620&h=465"}
        ];

app.get("/campgrounds",function(req,res){
    
        res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
     //get data from form and add to campgrounds array
    //redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name,image:image};
    campgrounds.push(newCampground);
    //redirect back to campground page
    res.redirect("/campgrounds");
   
});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
})















app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The YelpCamp server has started!");
});