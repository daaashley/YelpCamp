var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [{
    name:"Clouds Rest",
    image:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2313623.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare maximus turpis eu tincidunt. Nam eu sodales velit. Donec quis vulputate leo. Aenean ut imperdiet augue. Ut laoreet tortor id ultricies auctor. Etiam non pulvinar odio, a sollicitudin purus. Aliquam erat volutpat. Suspendisse non ullamcorper ex. Phasellus in suscipit dui, quis ullamcorper tortor. Aenean a dolor vestibulum, tempus diam et, vestibulum sem. Mauris vel quam augue. Quisque nisl magna, vehicula in posuere id, mattis quis tortor. Donec sed nisi non lorem pharetra cursus. Aliquam iaculis, dolor eget consectetur tempus, purus risus porta augue, et vestibulum ligula orci id est. Phasellus sit amet mollis ipsum, non tempus nulla."
            },
            {
    name:"Desert Mesa",
    image:"https://i.pinimg.com/736x/aa/93/5e/aa935e9cecf1534287411c1dcbfb334c--fun-facts-about-dogs-medium-size-dogs.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare maximus turpis eu tincidunt. Nam eu sodales velit. Donec quis vulputate leo. Aenean ut imperdiet augue. Ut laoreet tortor id ultricies auctor. Etiam non pulvinar odio, a sollicitudin purus. Aliquam erat volutpat. Suspendisse non ullamcorper ex. Phasellus in suscipit dui, quis ullamcorper tortor. Aenean a dolor vestibulum, tempus diam et, vestibulum sem. Mauris vel quam augue. Quisque nisl magna, vehicula in posuere id, mattis quis tortor. Donec sed nisi non lorem pharetra cursus. Aliquam iaculis, dolor eget consectetur tempus, purus risus porta augue, et vestibulum ligula orci id est. Phasellus sit amet mollis ipsum, non tempus nulla."
            },
            {
    name:"Indiana Plains",
    image:"https://i.pinimg.com/736x/72/b2/4c/72b24c9092b31f59a085db0051b479b5--best-dogs-for-kids-vizsla-puppies.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare maximus turpis eu tincidunt. Nam eu sodales velit. Donec quis vulputate leo. Aenean ut imperdiet augue. Ut laoreet tortor id ultricies auctor. Etiam non pulvinar odio, a sollicitudin purus. Aliquam erat volutpat. Suspendisse non ullamcorper ex. Phasellus in suscipit dui, quis ullamcorper tortor. Aenean a dolor vestibulum, tempus diam et, vestibulum sem. Mauris vel quam augue. Quisque nisl magna, vehicula in posuere id, mattis quis tortor. Donec sed nisi non lorem pharetra cursus. Aliquam iaculis, dolor eget consectetur tempus, purus risus porta augue, et vestibulum ligula orci id est. Phasellus sit amet mollis ipsum, non tempus nulla."
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


