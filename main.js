$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson', function(json) {
  
  var nb_earthquake = $("#nb_earthquake");
  var nb = json.features.length;
  // rajouter une fonction if pour le singulier
  // Option 1: si 0, tu vas changer la phrase + écrire en vert
  // Option 2: si 1, mettre au singulier
  // Option 3: plus de 1
  nb_earthquake.html("<span id=\"nb\">" + nb + "</span> earthquakes have happened in the past hour.");
  var number = $("#nb");
  number.css("color", "red");
  number.css( "font-size", nb*5 + "px" ); 
});

// DEFINE VARIABLES
// Define size of map group
// Full world map is 2:1 ratio
// Using 12:5 because we will crop top and bottom of map
var w = 3000;
var h = 1250;
// variables for catching min and max zoom factors
var minZoom;
var maxZoom;

// Define map projection
var projection = d3
   .geoEquirectangular()
   .center([0, 15]) // set centre to further North
   .scale([w/(2*Math.PI)]) // scale to fit group width
   .translate([w/2,h/2]) // ensure centred in group
;

var myArray = [ 100, "Bob", "Steve", 10 ];
console.log ( myArray[ 0 ] );

console.log ("Theo");