// once loaded, we can use jQuery in our scripts to create elements:
jQuery( "body" ).prepend( "<p>This paragraph was created using jQuery!</p>" );
// here jQuery selects the "body" element of our page, and wraps it in a JS object with all jquery methods
// and we call the "prepend" method to insert HTML code at the beginning of the "body" element
// try the "append" method instead to insert HTML code at the end of the "body" element


// we can also manipulate the text of our elements
$( "h1" ).text( "Hello jquery!" );
// "$" is a shorthand for "jQuery" 
// here we use the selector "h1" to 

// or we can manipulate their css
$( "p" ).css( { "color": "#666", "font-family": "sans-serif" } );
// as you can see this affect all the paragrapghs in our page, even the one created by jQuery at the beginning of our script