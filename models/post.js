//Make things modular. 
//Module exports allows us to break things into a file
//I can have multiple files using this module

var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
   title : String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

//Tell javascript what we wanna return from the fucntion
module.exports = Post;
//Or you can do this in a single line:  module.exports = mongoose.model("Post", postSchema);
