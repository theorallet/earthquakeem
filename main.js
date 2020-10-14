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

$(".container").mapael({
        map : {
            name : "world_countries"
        }
    });

var myArray = [ 100, "Bob", "Steve", 10 ];
console.log ( myArray[ 0 ] );

console.log ("Theo");