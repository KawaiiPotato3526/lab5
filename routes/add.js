var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
  var name = request.query.name;
var description = request.query.description;
var imageURL =  "https://source.unsplash.com/1600x900/?girl"

    var newFriend =
    {
        "name": name,
        "description": description,
        "imageURL" : imageURL,

    };

  data.friends.push(newFriend);
  response.render("index",data)

 }
