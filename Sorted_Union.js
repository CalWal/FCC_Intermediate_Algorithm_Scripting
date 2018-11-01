function uniteUnique(arr1,arr2,arr3){
// placeholder is a copy of the original array
var placeHolder = arr1;
// goes through the length of arguments
for (var i = 0; i<arguments.length; i++){
// goes through the current index of arguments
  for (var j = 0; j< arguments[i].length;j++){
// if the array contains no values from the arguments, return -1
  if(placeHolder.indexOf(arguments[i][j]) === -1){
// if so, push it to the placeholder array    
    placeHolder.push(arguments[i][j]);
  }
  }
}
// sets the original array to the altered array
arr1 = placeHolder;
  return arr1;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
