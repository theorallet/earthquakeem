$.getJSON( "https://randomuser.me/api/?results=300", function( data ) {
  console.log( data ); // print data in the console
  var users = data.results; // results is an array of users
  
  // store 
  var body = $( "body" );
  
  // loop through each user in our "users" array
  for( var i = 0; i< users.length; i = i + 1 ) {
    // store the current user in a variable
    var user = users[ i ];
    
    
    var img = $( "<img src=\"" + user.picture.large + "\">" );
    body.append( img );
  }
  
} );