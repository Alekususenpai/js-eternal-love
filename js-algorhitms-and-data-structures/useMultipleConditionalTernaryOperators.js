/** Use Multiple Conditional (Ternary) Operators
  It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. 
  For example: function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
 */

  function checkSign(num) {
    return (num === 0) ? 'zero' 
    : (num > 0) ? 'positive' 
    : 'negative';
  }
  
  checkSign(10);