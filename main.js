$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson', function(json) {
  console.log(json);
});

var myVariable;

// After declaring a variable, we can assign it a value:
myVariable = 1337;

// We can retrieve the value by calling the variable name and print it using console.log:
console.log( myVariable );