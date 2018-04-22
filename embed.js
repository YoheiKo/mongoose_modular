//One to Many. One user can have multiple posts.

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//Post - title, content. Post will be embeded inside the User.
//We have to define it before embeded it
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

//User - email, name, and posts. User has an array of associated posts.
var userSchema = new mongoose.Schema({
 email: String,
 name: String,
 posts: [postSchema] // posts Attribute which is an array of posts
});
var User = mongoose.model("User", userSchema);


/*var newUser = new User({
   email: "hermione@hogwarts.edu",
   name: "Hermione Granger"
});

newUser.posts.push({
   title: "How to bre polyjuice potion",
   content: "Just kidding. Go to potons class to learn it"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    }  else {
        console.log(user);
    }  
});*/

/*
var newPost = new Post({
   title: "Reflections on Apples",
   content: "They are deliscious"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

*/

User.findOne({name: "Hermione Granger" }, function(err, founduser){
    if(err){
        console.log(err);
    } else {
        founduser.posts.push({
            title: "Three things I really hate",
            content: "Voldemort. Voldemort. Voldemort."
        });
        founduser.save(function(err, saveduser){ //
           if(err){
               console.log(err);
           } else {
               console.log(saveduser);
           } 
        });
    }
});