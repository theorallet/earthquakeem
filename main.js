// select all "li" elements and set their text using a function
$( "li" ).text( function() {
  var currentText = $( this ).text(); // this refers to the current element on which the function is applied
  // currentText equals "Learn HTML" for the first "li"
  // currentText equals "Learn CSS" for the second "li"
  // currentText equals "Learn JS" for the third "li"
  
  return currentText + " !!!";
} );