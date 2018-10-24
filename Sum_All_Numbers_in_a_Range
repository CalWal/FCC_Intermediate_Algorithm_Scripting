function sumAll(arr) {

// Math.max finds the largest number in the array
var maxNumber = Math.max.apply(null,arr);

// Math.min finds the smallest number in the array
var minNumber = Math.min.apply(null,arr);

// range is used for the for loop
// in this case range = 3
var range = maxNumber - minNumber;

// variable needed to start at 0 for adding.
var total = 0;

//this goes through in the following fashion:
// 1 + 1 = 2 ([i]=2)
// 2 + 3 = 5 ([i]=3)
for (var i = 1; i< range; i++){
  total = total + minNumber + i;
}
      // 5 + 4 + 1 = 10
total = total + maxNumber + minNumber;

return total;
}

sumAll([1, 4]);
