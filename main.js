$.getJSON('https://data.nasa.gov/resource/y77d-th95.json', function(json) {
  console.log(json);
  
  for(var index = 0; index < json.length; index = index + 1) {
    var meteor = json[index];
    $("#meteors").append("<li>" + meteor.name + "</li>");
  }
});