#YelpCamp

* Add Landing Page
* Add campgrounds Page that lists all campgrounds
*

Each Campground has:
*Name
*Image

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds 
*Setup new campground post route
*Add in body parser
* Setup route to show form
* add basic unstyle form
#Mongo DB stuff
*commands
*mongod
mongo
help
show dbs
use
insert
find
update
remove

Mongoose Example
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");
//add a new cat to the DB
//retrieve all cats from the DB

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
    
});
//creates model object that we can operate on
var Cat = mongoose.model("Cat", catSchema);
//adds cat to database
/*
var George = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

George.save(function(err,cat){
    if(err){
        console.log('something wrong');
    }
    else{
        console.log('we just saved a cat');
        console.log(cat);
    }
});
*/
//retrieve all cats from the DB, passing in empty object to get all cats
Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
},function(err,cat){
    if(err){
        console.log(err)
    }else{
        console.log(cat);
    }
});


Cat.find({}, function(err,cat){
    if(err){
        console.log("there is an error");
        console.log(err);
    }else{
        console.log(cat);
    }
});

#Add Mongoose
Install and configure
setup campground model 
use campground model inside of our routes