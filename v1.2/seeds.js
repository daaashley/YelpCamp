var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [{
    name:"Clouds Rest",
    image:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2313623.jpg",
    description:"Blah blah blah."
            },
            {
    name:"Desert Mesa",
    image:"https://i.pinimg.com/736x/aa/93/5e/aa935e9cecf1534287411c1dcbfb334c--fun-facts-about-dogs-medium-size-dogs.jpg",
    description:"This is a really great campground with puppies."
            },
            {
    name:"Indiana Plains",
    image:"https://i.pinimg.com/736x/72/b2/4c/72b24c9092b31f59a085db0051b479b5--best-dogs-for-kids-vizsla-puppies.jpg",
    description:"More test description boiiiii yeah boi thats right son."
            }
            

];

//removes all camgrounds
function seedDB(){
    Campground.remove({},function(err){
    console.log("removed campgrounds!");
    data.forEach(function(seed){
    Campground.create(seed, function(err,campground){
        if(err){
            console.log(err);
        }else{
            console.log("added campground");
            //create a comment
            Comment.create({text:"This place is great but I wish there was internet.",
                            author: "Homer"
            }, function(err, comment){
                if(err){
                    console.log(err);
                }else{
                    
                
                campground.comments.push(comment);
                campground.save();
                console.log("comment added");
                }
            });
        }
    });
});
});
}
//add in test campgrounds












module.exports = seedDB;


