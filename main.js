// first let's create a few tasks with JS
// this will help us review arrays and loops
var tasks = [
  "Review arrays",
  "Searching a stage",
  "Laundry"
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
    // we add this task to our list
    
    // we've seen that methods like ".css" can be used to get or set a css property according to the arguments passed
    // instead of selecting elements, the "$" can also be used to create an HTML element if we pass it an HTML string
    var newTask = $( "<li>" + task + "</li>" );
    
    // we had the event listener to fade it out when clicked
    newTask.on( "click", function() {
      $( this ).fadeOut();
    } );
    
    // and we add it at the end of our tasks list
    taskList.append( newTask );
    
    // finally, we clear the text in the input box
    $( "input" ).val( "" );
  }
} );