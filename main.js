// select all "li" elements and 
// for each, set their text using a function
$( "li" ).text( function() {
  // "this" refers to the current element on which the function is applied
  // we need to select it with jQuery to use jQuery's methods
  var currentText = $( this ).text(); 
  // currentText equals "Learn HTML" for the first "li"
  // currentText equals "Learn CSS" for the second "li"
  // currentText equals "Learn JS" for the third "li"
  
  return currentText + " !!!";
} );