/** Spinal Tap Case 
 * 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  let regex = /\s+|_+/g;

  return str.replace(regex, "-").toLowerCase();
}

spinalCase("Teletubbies say Eh-oh");
