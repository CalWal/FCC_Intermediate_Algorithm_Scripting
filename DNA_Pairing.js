function pairElement(str) {
 
 // turns the string into caps + splits the letters up
  str = str.toUpperCase();
  str = str.split("");

//empty array to be filled 
var placeHolder = [];


// how DNA pairing words:

// G matches C
// C matches G
// A matches T
// T matches A

// This for loop goes through each letter and pushes its pairing depending on the letter provided:

for (var i = 0; i<str.length; i++){
  if(str[i]==="G"){
    placeHolder.push(["G","C"]);
  }

  else if(str[i]==="C"){
    placeHolder.push(["C","G"]);
  }

else if(str[i]==="A"){
    placeHolder.push(["A","T"]);
  }

else if(str[i]==="T"){
    placeHolder.push(["T","A"]);
  }


}
  
   
  return placeHolder;
}
// This will return [GC][CG][GC]
pairElement("GCG");
