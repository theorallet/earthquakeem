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

/* global d3 */
$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson', function(data) {
    // Set up the projection. We're using a version of Albers for the US.
    projection = d3.geoMercator()
      .fitSize([width, height], data);

    // Set up the path-drawing function
    path = d3.geoPath().projection(projection);

    // Add the states to the SVG
    svg.append('g')
      .selectAll('path')
      .data(data.features) // Put the GeoJSON data in D3
      .enter().append('path') // For each feature, add a path element
      .attr('d', path) // Draw the path for each feature in the GeoJSON
      .classed('state', true); // Add a 'state' class to each state
  });
// Create an SVG element for our map
var svg = d3.select("body")
  .append("svg");

var width = svg.node().getBoundingClientRect().width;
var height = svg.node().getBoundingClientRect().height;

var projection;
var path;

console.log ("Theo");