$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson', function(json) {
  console.log(json);
});

var myArray = [ 100, "Bob", "Steve", 10 ];
console.log ( myArray[ 0 ] );