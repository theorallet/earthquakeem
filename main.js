// select all "li" elements and set their text using a function
$( "li" ).text( function() {
  var currentText = $( this ).text(); // this refers to the current element on which the function is applied
  // currentText equals "Learn 
  return currentText + " !"
} );