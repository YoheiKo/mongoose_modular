var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//Import postScehma from post.js
// "./"  referes to where we are now
var Post = require("./models/post");
var User = require("./models/user");

//Rather than embedding the entire posts, we are storing and referencing the ids of posts 

/*User.create({
    email: "bob.gmail.com",
    name: "Bob Belcher"
});*/

//Do mongo -> use blog_demo_2 -> show collections -> users.find()


//Create a post
/*Post.create({
   title: "How to cook the best burger",
   content: "blah blah blah"
}, function(err, post){
    if(err){
        console.log(err);
    }   else {
        console.log(post);
    } 
});*/

/*Post.create({
   title: "How to cook the best burger2",
   content: "blah2 blah2 blah2"
}, function(err, post){
    if(err){
        console.log(err);
    }   else {
        User.findOne({email: "bob.gmail.com"}, function(err, foundUser){
            if(err){
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    } 
});*/

Post.create({
   title: "How to cook the best burger4",
   content: "blah3 blah3 blah3 blah4"
}, function(err, post){
    if(err){
        console.log(err);
    }   else {
        User.findOne({email: "bob.gmail.com"}, function(err, foundUser){
            if(err){
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    } 
});

//Find user and Find post

//1. FInd User, thenp retrieve the data from posts, and finally execute all the above
/*User.findOne({email: "bob.gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
*/