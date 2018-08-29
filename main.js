// The "on" method takes 2 parameters:
// - the type of event to listen for
//   ( we can find the complete list of event types here: https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events )
// - a callback function to execute when the event is fired
$( "#slider" ).on( 'change', function() {
  var value = $( this ).val(); // we retrieve the value of the slider and store it
  $( "#paragraph" ).css( 'font-size', value + 'px' ); 
} )

console.log( $( "#slider" ).val() )