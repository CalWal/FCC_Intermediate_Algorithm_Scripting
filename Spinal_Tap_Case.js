function spinalCase(str) {
//This was difficult!

// the first replace regex gets any whitespace and underscore and replaces it with a dash (-).
// \s_ gets all cases of it.
// /g is the global, meaning it gets all cases of this.
  return str.replace(/([\s_])/g,'-')

// the second replace takes care of camel case by matching a lowercase letter with an uppercase letter.
// it then adds in the dash between them as seen with $1-$2
// $1 is the first match -  the lowercase letter
// $2 is the second match -  the uppercase letter
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .toLowerCase();
}

spinalCase('This Is Spinal Tap');
