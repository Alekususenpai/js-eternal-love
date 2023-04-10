/** Search and Replace
 * 
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

*/

function myReplace(str, before, after) {
  if (str.includes(before)) {
    if (before[0] === before[0].toUpperCase()) {
      after = after.slice(0, 1).toUpperCase() + after.slice(1);
      //or  after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after.slice(0, 1).toLowerCase() + after.slice(1);
    }
  }
  return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
