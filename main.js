// first let's create a few tasks with JS
// this will help us review arrays and loops
var tasks = [
  "Revising arrays",
  "Laundry",
  "Searching a stage",
  "Meet Emmie"
];

var taskList = $( "#tasklist" );
for( var i = 0; i < tasks.length; i = i+ 1 ) {
  taskList.append( "<li>" + tasks[ i ] + "</li>");
}