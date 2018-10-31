function myReplace(str, before, after) {
  // checks if the word to be replaced is capatalised 
if (before.charAt(0)===before.charAt(0).toUpperCase()){
  // the replacing word comes in with a capital letter + the remaining letters sliced as lowercase
str = str.replace(before,after.charAt(0).toUpperCase(0) + after.slice(1));
  } 

  // if all good, just replace the words
  else{
  str = str.replace(before,after);
  }
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
