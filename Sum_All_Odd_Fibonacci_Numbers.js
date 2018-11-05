// adding 2 new methods to the Array prototype:

// this returns the last number of an array.
Array.prototype.lastNumber = function(){
  return this[this.length-1];
}

// this returns the second last number of an array.
Array.prototype.secondLastNumber = function(){
  return this[this.length-2];
}


function sumFibs(num) {

var sequence = [1,1];

// while the second to last number + the last number are equal or less than the given number, push the combined number to the end of the sequence array.
while (sequence.secondLastNumber()+ sequence.lastNumber() <= num){
  sequence.push(sequence.secondLastNumber()+ sequence.lastNumber())
}


// filters through the array finding only odd numbers
// then reduces them to a single number by adding them
return sequence.filter(function(num){
 return num % 2 !== 0;
}).reduce(function(a,b){
return a + b;

})

}
// this will return 5:
// while loop returns: 1,1,2,3
// filter returns: 1,1,3
// reduce returns: 1 + 1 + 3 = 5
sumFibs(4);
