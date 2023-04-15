/** Convert HTML Entities
 * 
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  const regex = /[^\s+$^A-Za-z0-9]/g;
  let checkArr = str.match(regex);
  const newArr = [...new Set(checkArr)].join("");
  let replacement;
  switch (newArr) {
    case "&":
      replacement = "&amp;";
      break;
    case "<":
      replacement = "&lt;";
      break;
    case ">":
      replacement = "&gt;";
      break;
    case '"':
      replacement = "&quot;";
      break;
    case "<>":
      replacement = "&lt;&gt;";
      break;
    case "'":
      replacement = "&apos;";
      break;
  }
  return str.replace(regex, replacement);
}

console.log(convertHTML("<>"));
