/** Steamroller
 * 
Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  const flattened = [];
  arr.map((el) => {
    if (Array.isArray(el)) {
      flattened.push(...steamrollArray(el));
    } else {
      flattened.push(el);
    }
  });
  return flattened;
}

console.log(steamrollArray([1, [], [3, [[4]]]]));
