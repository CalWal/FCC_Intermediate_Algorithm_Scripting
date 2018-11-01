function fearNotLetter(str) {

for (var i= 0;i<str.length; i++){
// gets the code for the current character in the string
  var code = str.charCodeAt(i);

// if code is not equal to the first character in the string + the number of times iterated through the for loop
  if (code !== str.charCodeAt(0)+ i){

// finds the previous character and returns it
    return String.fromCharCode(code - 1);
  }
}



// if all is well, will return undefined.
  return undefined;
}

fearNotLetter("abce");

