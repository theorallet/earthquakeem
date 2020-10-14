$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson', function(json) {
  
  console.log(json.features.length);
  // rajouter une fonction if pour le singulier
  // Option 1: si 0, tu vas changer la phrase + écrire en vert
  // Option 2: si
  $("#nb_earthquake").html("In the past hour, <b>" + json.features.length + "</b> earthquakes have happened.");
});

var myArray = [ 100, "Bob", "Steve", 10 ];
console.log ( myArray[ 0 ] );

console.log ("Theo");