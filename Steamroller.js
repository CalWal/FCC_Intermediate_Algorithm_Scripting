function steamrollArray(arr) {
// Empty Array to return
var placeHolder = [];
// calls our recursive function that goes through the empty arrays
recurseTheArray(arr)

function recurseTheArray(arr){
  // Goes through each index and adds elements if they are not arrays to placeHolder
  arr.forEach(function(arr2){
    if (Array.isArray(arr2)===false){
      placeHolder.push(arr2)
    }
    else {
      // if the element is an array, recurse back through the original array.
      recurseTheArray(arr2)
    }

  })
}
  return placeHolder;
}

steamrollArray([1, [2], [3, [[4]]]]);
