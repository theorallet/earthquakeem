/* global d3 */
var svg = d3.select("body")
  .append("svg");

var width = svg.node().getBoundingClientRect().width;
var height = svg.node().getBoundingClientRect().height;

var projection;
var path;

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
  
  projection = d3.geoMercator()
                .scale(width / 2.5 / Math.PI) 
                .rotate([0, 0]) 
                .center([0, 0]) 
                .translate([width / 2, height / 2]);;
  
  svg.append("g")
    .selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("fill", "black")
    .attr("d", d3.geoPath().projection(projection))
    .style("stroke", "#ffff"); 

});

console.log ("Theo");