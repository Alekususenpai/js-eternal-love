/** Smallest Common Multiple
 * 
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. 

PS. Probably one of the hardest exercises from the whole cert.
*/

function findSCM(num1, num2) {
  let smallerNum = Math.min(num1, num2);
  let biggerNum = Math.max(num1, num2);
  for (let i = biggerNum; i <= biggerNum * smallerNum; i += biggerNum) {
    if (i % smallerNum === 0) {
      return i;
    }
  }
}

function smallestCommons(arr) {
  let smallerNum = Math.min(...arr);
  let biggerNum = Math.max(...arr);
  let result = findSCM(...arr);
  for (let i = smallerNum; i <= biggerNum; i++) {
    if (result % i !== 0) {
      result = findSCM(result, i);
    }
  }
  return result;
}

console.log(smallestCommons([1, 5]));
