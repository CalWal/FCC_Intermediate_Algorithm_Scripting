function convertHTML(str) {
  // splits the given string
  var placeHolder=str.split('');

// goes through the string finding each of characters that need to be swapped
for (var i=0; i<placeHolder.length; i++){
  switch (placeHolder[i]){
    case '&':
    placeHolder[i] = '&amp;';
    break;
    case '<':
    placeHolder[i] = '&lt;';
    break;
    case '>':
    placeHolder[i] ='&gt;';
    break;
    case '"':
    placeHolder[i] = '&quot;';
    break;
    case "'" :
    placeHolder[i] = '&apos;';
    break;
  }
}
// joins the string back together and returns with new code.
  str=placeHolder.join('')
  return str;
}

convertHTML("Dolce & Gabbana");
