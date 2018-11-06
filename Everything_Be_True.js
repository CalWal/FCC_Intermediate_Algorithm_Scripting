function truthCheck(collection, pre) {
 // Goes through every object in an array
  return collection.every(function(obj){
    // returns true if object property is matching given argument
    return obj[pre];
  })
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
