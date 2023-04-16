/** Missing letters
 * 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  const arr = [...str];
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  let start = alphabet.indexOf(str[0]);
  let end = alphabet.indexOf(str.slice(-1));
  let alphabetSample = alphabet.slice(start, end + 1);
  let result = arr.concat(alphabetSample).filter((el) => !arr.includes(el));
  return result.join("") || undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
