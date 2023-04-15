/** DNA Pairing
 * 
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
 */

function pairElement(str) {
  const arr = [];
  const value = [...str];
  value.map((el) => {
    if (el === "A") {
      arr.push([el, "T"]);
    } else if (el === "T") {
      arr.push([el, "A"]);
    } else if (el === "C") {
      arr.push([el, "G"]);
    } else {
      arr.push([el, "C"]);
    }
  });
  return arr;
}

// or

function pairElement(str) {

  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return str.split("").map((el) => [el, pairs[el]]);
}

pairElement("GCG");
