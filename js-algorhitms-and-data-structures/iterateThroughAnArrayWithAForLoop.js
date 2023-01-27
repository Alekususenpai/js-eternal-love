/** Iterate Through an Array with a For Loop
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total. */


////////////////////////////////////////////////////////////
// SOLUTION WITH EXPLANATION -->

/** 
For loops are declared with three optional expressions separated by semicolons:
--> for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
 */

const myArr = [2, 3, 4, 5, 6];

let total = 0;

// let i = 0; i starts from 0 - initialization statement (applies only the first time of the loop)
// until i is smaller from the length of the myArray - condition statement
// i++ - what to do with i - final expression

for (let i = 0; i < myArr.length; i++) {
   total += myArr[i]
}

/* So here i=0 and 0 is smaller than 5, then i becomes 2. It executes what's in the curly brackets --> adds the value of myArr[0] which is 2 to totals so now totals = 2. */ 

/** Then i = 1 (remember i++) and 1 is smaller than 5, i is set to 3. It executes what's in the curly brackets --> adds the value of myArr[1] which is 3 to totals so now totals = 2 + 3.  */

// The loop will continue to run until the condition is true.
