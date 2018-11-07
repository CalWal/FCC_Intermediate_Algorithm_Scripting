var Person = function(firstAndLast) {
// lets work  'Cal Wal'
// this splits it into 2 arguments: [Cal, Wal]
var array = firstAndLast.split(' ');
// gets the first name, Cal
this.getFirstName = function(){
  return array[0];
}
// gets the second name, Wal
this.getLastName = function(){
  return array[1];
}
// makes [Cal,Wal] = Cal Wal
this.getFullName = function(){
  return array[0] + " " + array[1];
}
// Cal now equals first
this.setFirstName = function(first){
array[0]= first;
}
// Wal now equals last
this.setLastName = function(last){
array[1]=last;
}
// takes into the original argument of Cal Wal
this.setFullName = function(firstAndLast){
 // splits it into [Cal, Wal]
var splitTheNames = firstAndLast.split(' ');
// gets previously set first (Cal)
this.setFirstName(splitTheNames[0]);
// gets previously set last (Wal)
this.setLastName(splitTheNames[1]);
};
}
var bob = new Person('Bob Ross');
bob.getFullName();
