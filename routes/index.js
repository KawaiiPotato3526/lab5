// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
  response.render('index',data)
};
