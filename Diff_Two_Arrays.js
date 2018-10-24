function diffArray(arr1, arr2) {
  // empty array for new array of unique items to go into
  var newArr = [];

//for loop goes through first array
  for (var i = 0; i < arr1.length; i++){
    // if array2 doesnt contain any items in array1
    if (arr2.indexOf(arr1[i])=== -1){
      // adds to the new array
      newArr.push(arr1[i]);
    }
  }

// same for loop as above, except going over second array
  for (var j = 0; j < arr2.length; j++){
    // if array1 doesnt containt any items in array2
    if (arr1.indexOf(arr2[j])=== -1){
      // adds to the new array
      newArr.push(arr2[j]);
    }
  }

  // returns the new array with the new items from each for loop
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
