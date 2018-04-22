//Make things modular.
//Module exports allows us to break things into a file
//I can have multiple files using this module
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   //Attribute posts is an array of objectId belonging to "Post"
   posts: [ 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
                    
        }
   ]
});
var User = mongoose.model("User", userSchema);

//Tell javascript what we wanna return from the function
//This is the one thing we return from this module js
module.exports = User;
////Or you can do this in a single line:  module.exports = mongoose.model("User", userSchema);
