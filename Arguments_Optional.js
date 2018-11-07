function addTogether() {
  // creates empty array to slice each argument into 
var parameters = [].slice.call(arguments)
// If every type of argument in addTogether is not a number, return undefined.
if (!parameters.every(function(parameter){
return typeof parameter === 'number';
})){
  return undefined
}
// if 2 arguments are given in addTogether, combine the returned number
if (parameters.length === 2){
  return parameters[0] + parameters[1];
}
// if its only 1, store the first number and add it using recursion to the second number.
else{
  var firstParameter = parameters[0];
// How this works:
// the arguments given are (2,3)
// var addOneMore = addTogether(2)
// calling addTogether(3) will now return 5.
  var addOneMore = function(secondParameter){
    return addTogether(firstParameter,secondParameter);
  }
}

return addOneMore;

}

addTogether(2,3);
