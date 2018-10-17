$.getJSON( "https://randomuser.me/api/?results=100", function( json ) {
  console.log( json ); // print data in the console
  var users = json.results; // results is an array of users
  
  // store the "body" of our document inside a jQuery object
  var body = $( "body" );
  
  // loop through each user in our "users" array
  for( var i = 0; i< users.length; i = i + 1 ) {
    // store the current user in a variable
    var user = users[ i ];
    
    // we create a container for the user image and its data
    var imgContainer = $( "<div class='img-container'></div>" );
    
    // we create a jQuery object with an "img" element
    var img = $( "<img>" );
    // set its "src" attribute with a jquery method
    img.attr( "src", user.picture.large );
    // and append this element to our container
    imgContainer.append( img );
    
    // we create a jQuery object with a new paragraph 
    var userData = $( "<p class='user-data'></p>" );
    // set its inner HTML with jQuery
    userData.html( user.name.first + "<br>" + user.name.last );
    // and append this to our container
    imgContainer.append( userData );
    
    // finally we append the container to the "body" of our document
    body.append( imgContainer );
  }
} );