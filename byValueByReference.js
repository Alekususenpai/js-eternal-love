// By value (primitives)

//a and b point to the same address - same place in memory. 

var a = 5;

var b;

b = a;

console.log('a is: ' + a + ' and b is: ' + b)

// they will be two separate copies in memory and have their own DIFFERENT space in memory meaning that if we change a, b won't change. The value of a is simply copied to b.

var a = 8;

console.log('a is: ' + a + ' and b is: ' + b)





// By reference (all objects, including functions)  --> c === d

var c = { greeting: 'hello' };
var d;

d = c;

console.log('c is: ' + c.greeting + ' and d is: ' + d.greeting)

// they will change because they're pointing to the SAME space in memory --> c === d

c.greeting = 'Hola';

console.log('c is: ' + c.greeting + ' and d is: ' + d.greeting)


// EQUAL operator sets up a NEW memory space (new address) -->    c !== d

var c = { greeting: 'Zdravo' };
console.log('c is: ' + c.greeting + ' and d is: ' + d.greeting)