// first let's create a few tasks with JS
// this will help us review arrays and loops
var tasks = [
  "Revising arrays",
  "Laundry",
  "Searching a stage",
  "Meet Emmie"
];

var taskList = $( "#taskList" );
for( var i = 0; i < tasks.length; i = i+ 1 ) {
  taskList.append( "<li>" + tasks[ i ] + "</li>");
}

// when the user click on the button
$( "button" ).on( "click", function() {
  // we retrieve the text in the input element
  var task = $( "input" ).val();
  
  // if it's not empty
  if( task !== "" ){
    // we had this task to our list
    taskList.append( "<li>" + tasks[ i ] + "</li>");
  }
} );