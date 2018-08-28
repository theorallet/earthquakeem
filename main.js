function getCurrentDate() {
  // create a new JavaScript Date to get a JS object representing the current date
  var date = new Date();
  
  // "toLocaleDateString" is a method of Date objects
  // it returns a string with the date formated to be readable
  var readableDate = date.toLocaleDateString(); 
  
  return readableDate;
}

$( "#date" ).text( getCurrentDate );
// the text of the element with a "date" id 