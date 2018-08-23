// once loaded, we can use jQuery in our scripts to create elements:
jQuery( "body" ).prepend( "<p>This paragraph is created using jQuery!</p>" );
// jQuery selects the "body" element of our page, and wraps it in a JS object with all jquery methods
// and we call the "prepend" method to insert HTML code at the beginning of the "body" element
// try the "append" method instead to insert HTML code at the end of the "body" element


// we can also manipulate the text of our elements
$( "#title" ).text( "Hello jquery!" );
// ("$" is the shorthand for "jQuery")
// we select the "h1" element and use the "text" method to set its inner text

// or we can manipulate the css of elements
$( "p" ).each( function(){ 
  var hue = Math.random() * 360; // Math.random() returns a random number between 0 and 1
  $(this).css( { 
    "background": "hsl(" + hue + ", 100%, 50% )", 
    "font-family": "sans-serif" 
  } ) 
} );
// as you can see this affect all the paragrapghs in our page, even the one created by jQuery at the beginning of our script
// here we are passing an object as argument to the "css" method to set several properties in a single instruction