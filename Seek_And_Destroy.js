function destroyer(arr) {
// this gets the entire array in destroyer
// [[1, 2, 3, 1, 2, 3], 2, 3]
var args = Array.prototype.slice.call(arguments);
// this then splices leaving only [2,3]
args.splice(0,1);

// empty placeholder for sake of ease
var placeholder = [];

// goes through first array
for (var i = 0; i< arr.length; i++){
  // then goes through second array [2,3]
  for (var j = 0; j < args.length; j++){
    // if they have the same value, then delete them
    if (arr[i]=== args[j]){
    delete arr[i];
    }
  }
}
// placeholder then becomes the only remaining items in an array
placeholder = arr.filter(Boolean);

  return placeholder;
}

// this will return [1,1]
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
