
function smallestCommons(arr) {
  // sorts the numbers out from smallest to biggest
var range = arr.sort(function(a,b) {
        return a-b
    });
// empty array to put sorted numbers into
var placeHolder = [];

// starts for loop at lowest value and stops at highest
for (var i = arr[0]; i <= arr[arr.length-1]; i++){
// array will now be [1,2,3,4,5]
  placeHolder.push(i);
}
// variable just for keeping a truthy value;
var trueVariable = true;
// number to increment
var lowestCommonMultiple = 0;

// while true
while (trueVariable){
  // the number is returned
  lowestCommonMultiple++
// for loop goes through the placeholder array [1,2,3,4,5]
  for (var j= placeHolder[0]; j <= placeHolder[placeHolder.length-1]; j++){
    // if modular = 0, break the loop
    if(lowestCommonMultiple % j !==0){
      break;
    }
    // the while loop stops when the for loop gets to the end of the array.
    else if (j === placeHolder[placeHolder.length-1]){
      trueVariable = false;
    }
  }
}

return lowestCommonMultiple;
}


smallestCommons([5,1]);
