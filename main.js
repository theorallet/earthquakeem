// first let's create a few tasks with JS
// this will help us review arrays and loops
var tasks = [
  "Revising arrays",
  "Laundry",
  "Searching a stage",
  "Meet Emmie"
];

// we select the "ul" element with the "taskList" id
var taskList = $( "#taskList" );

// for each of the tasks in the "tasks" array
for( var i = 0; i < tasks.length; i = i+ 1 ) {
  // we add a new "li" element with the task at index "i" in our "tasks" array inside
  taskList.append( "<li>" + tasks[ i ] + "</li>" );
}

// then we listen for "click" events on each "li" elements
$( "li" ).on( "click", function() {
  // we select the current "li" on which there is a "click"
  // and we make them disappear slowly
  $( this ).fadeOut();
} );


// now let's see how to add new tasks via an input box

// when the user click on the button
$( "button" ).on( "click", function() {
  // we retrieve the text in the input element
  var task = $( "input" ).val();
  
  // if it's not an empty string
  if( task !== "" ){
    // we had this task to our list
    taskList.append( "<li>" + task + "</li>" );
    // and we clear the text in the input box
    $( "input" ).val( "" );
  }
} );