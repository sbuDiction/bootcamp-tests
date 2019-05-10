function yearsAgo(years) {
  var present = new Date();
  var year = present.getFullYear();  
return year - years;
}
