function getCurrentDate() {
  var date = new Date();
  return date.toLocaleDateString();
}
/*
  The getCurrentDate function creates a new JavaScript Date to get a JS object representing the current date
  then its "toLocaleDateString" method to get a readable date
*/


$( "#date" ).text( getCurrentDate );
