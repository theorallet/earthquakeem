$.getJSON( "https://randomuser.me/api/?results=100", function( data ) {
  console.log( data ); // print data in the console
  var users = data.results; // results is an array of users
  
  // store 
  var body = $( "body" );
  
  // loop through each user in our "users" array
  for( var i = 0; i< users.length; i = i + 1 ) {
    // store the current user in a variable
    var user = users[ i ];
    
    var imgContainer = $( "<div class='img-container'></div>" );
    
    var img = $( "<img>" );
    img.attr( "src", user.picture.large );
    imgContainer.append( img );
    
    var userData = $( "<p class='user-data'></p>" );
    userData.html( user.name.first + "<br>" + user.name.last );
    imgContainer.append( userData );
    
    body.append( imgContainer );
  }
} );