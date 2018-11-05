// this is a bit confusing so here is a rundown of how this code works:
// sumPrimes provides a number (num)
// the i for loop goes through, followed by a j for loop, meeting 1 of 2 conditions
// if i and j are equal, its a prime number - then push the number to the placeHolder array
// if they are not, break the for loops and proceed to the next number.
// reduce function is used at the end to sum all numbers that made it to the array.

// In action:
// i = 2 j = 2 ==> prime number found ==> push to placeHolder array.
// i = 3, j =2, j++, j = 3 ==> prime number found ==> push to placeHolder array.
// i = 4, j =2 ==> 4%2 = 0 ==> non prime number found ==> break loop and move to next number.
// i = 5, j = 2, j++ through 3,4,5 ==> prime number found ==> push to placeHolder array.
// i = 6, j 2 ==> 6%2 = 0 ==> non prime number found ==> break loop and move to next number.
// i = 7, j = 2, j++ through 3,4,5,6,7 ==> prime number found ==> push to placeHolder array.
// i = 8, j = 2 ==> 8%2 = 0 ==> non prime number found ==> break loop and move to next number.
// i = 9, j = 2, j++ to 3 ==> 9 %3 = 0 ==> non prime number found ==> break loop and move to next number.
// i = 10, j = 2  ==> 10%2 = 0 ==> non prime number found ==> break loop and move to next number.

// placeHolder now is [2,3,5,7]
// placeHolder is reduced by using addition
// placeHolder returns 17.



function sumPrimes(num) {
  var placeHolder = [];

  for (var i =2; i<= num; i++){

      for (var j=2; j<= i; j++){
          if(i===j){
          
          placeHolder.push(i);

          }
        if(i%j===0){
          break;

        }  
      }
  }
  
  
  return placeHolder.reduce(function(a,b){
    return a + b;
  })

}
// this is a bit confusing so here is a rundown of how this code works:
sumPrimes(10);
