function whatIsInAName(collection, source) {
  // filters through the array of first and last name objects.
  var arr = collection.filter(function (item){
    // goes through each to see if it matches the source
    // in this case the source is last name Capulet
    for (var i in source){
      // if there is no match, do not return a filtered array
      if (source[i] !== item[i]){
        return false;
      }
    }
// otherwise return the filtered collection array.
    return true;


  })
  // Only change code below this line
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
