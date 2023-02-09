/**
 * Find the Longest Word in a String
 * 
Return the length of the longest word in the provided sentence.
 */

function findLongestWordLength(str) {

    // start with 0 as longest length   //  the first words' length can also be set here
    let longestLength = 0;

    // split the string in an array containing the words
    let words = str.split(' ');

    // iterate over each word to check the length
    for (let i = 0; i < words.length; i++) {

        // save the current word length in a variable 
        let currentLength = words[i].length;

        // compare the currentLength with the longestLength
        if (currentLength > longestLength) {

            // if longer, save it in a variable, otherwise keep the previous one
            longestLength = currentLength;
        }
    }

    // return it
    return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");