function dropElements(arr, func) {
  // while the function returns false on the 0 index
  while(!func(arr[0])){
    // shift left until it is true;
    arr.shift();
  }
  return arr;
}
// How this works:
// the given function wants to return numbers greter than or equal to 3.
// goes through the [1,2,3] array
// is [1] greater/equal than 3? NOPE. Shift it
// [2] is now at index 0. Is it greater/equal than 3? NOPE. Shift it
// [3] is now at index 0. is it greater or equal to 3? YEP. Return the array

dropElements([1, 2, 3], function(n) {return n >= 3;});
