
// Regular expressions called "regex" or "regexp", are patterns that help programmers match, search, and replace text


// JavaScript has multiple ways to use regexes: 



// 1. One way to test a regex is using the .test() method. 

//The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns TRUE or FALSE if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;                // --> TRUE

// So REGEX + .test + STRING
testRegex.test(testStr);



// 2. Another way to test a regex is using the .match() method. It extracts the actual matches you found with the method.

let ourStr = "Regular expressions";
let ourRegex = /expressions/;

// So STRINNG + .match + (REGEX)
ourStr.match(ourRegex);              // --> ["expressions"]



/*
<---------------------------------------------------------------------------------------------------------->
*/


// Match a Literal String with Different Possibilities
let regex = /choke|calena|newyork/;


// Ignore Case While Matching
let regex1 = /salsa/i;


// Find More Than the First Match - To search or extract a pattern more than once, you can use the global search flag: g
let testStr1 = "Repeat, Repeat, Repeat";
let ourRegex2 = /Repeat/g;
testStr.match(ourRegex);    // --> ["Repeat", "Repeat", "Repeat"]


// Match Anything with Wildcard Period 
let string = "run, sun,bun"
let regex3 = /.un/;
string.test(string);    // --> TRUE


// Match Single Character with Multiple Possibilities
let bigStr = "big, bag, bug"
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);    // --> ["big","bag","bug"]


// Match Letters of the Alphabet
let atStr = "cat, bat"
let atRegex = /[a-e]at/;
atStr.match(atRegex);   // --> ["cat","bat"]
// example 2
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);


// Match Numbers and Letters of the Alphabet
let quoteSample1 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result1 = quoteSample.match(myRegex); // --> [ 'l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's' ]


// Match Single Characters Not Specified - ^ - negated character sets aka the ones we do not want to match
let quoteSample2 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi;
let result2 = quoteSample.match(myRegex); // --> [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]


// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/gi;
let result3 = difficultSpelling.match(myRegex); // --> [ 'ss', 'ss' ]


// Match Characters that Occur Zero or More Times
let chewieRegex = /Aa*/;
let result4 = chewieQuote.match(chewieRegex);
/** [ 'Aaaaaaaaaaaaaaaa',
  index: 0,
  input: 'Aaaaaaaaaaaaaaaarrrgh!',
  groups: undefined ]
  */



// Find Characters with Lazy Matching - In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<h.*?>/;
let result5 = text.match(myRegex);

/**[ '<h1>',
  index: 0,
  input: '<h1>Winter is coming</h1>', */



// Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result6 = calRegex.test(rickyAndCal); // --> TRUE



// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result7 = lastRegex.test(caboose); // --> TRUE


// Match All Letters and Numbers -  \w  - 
// This shortcut is equal to [A-Za-z0-9_]. It matches upper and lowercase letters plus numbers + _
let quoteSample8 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/;
let result8 = quoteSample.match(alphabetRegexV2);


// Match Everything BUT Letters and Numbers  - \W -
// [^A-Za-z0-9_] --> no letters or numbers or underscore
let nonAlphabetRegex = /\W/g;


// Match All Numbers -  \d  - shorthand for [0-9]
let numRegex = /\d/;



// Match All Non-Numbers -  \D  - shorthand for [^0-9]
let numRegex1 = /\D/;



// Match Whitespace
let spaceRegex = /\s/;



// Match Non-Whitespace Characters - This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. 
let countNonWhiteSpace = /\S/g;


// Specify Only the Lower Number of Matches
// Match the word Hazzah only when it has four or more letter z's
let haRegex = /haz{4,}ah/i;



// Specify Exact Number of Matches
// Match the word Timber only when it has four letter m'.
let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i;



// Check for All or None - You can specify the possible existence of an element with a question mark, ?
let favWord = "favorite";
let favRegex = /favou?rite/i;



// Positive and Negative Lookahead
// Positive lookahead (?=...) vs Negative lookahead (?!...)
//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result10 = pwRegex.test(sampleWord);



// Reuse Patterns Using Capture Groups /(\w+)/
/**
 * Capture groups are constructed by enclosing the regex pattern to be captured in parentheses.
 * The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1).
 */
let reRegex = /^(\d+) \1 \1$/
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]



// Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result12 = str.replace(fixRegex, replaceText);



// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result13 = hello.replace(wsRegex, ""); // Change this line



/** <--------------------------------------------------------------------------------------------------------------> */


// Restrict Possible Usernames EXERCISE
let regEX = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

/**
 ^ - start of input
 [a-z] - first character is a letter
 [a-z]+ - following characters are letters
 \d*$ - input ends with 0 or more digits
 | - or
 ^[a-z] - first character is a letter
 \d\d+ - following characters are 2 or more digits
 $ - end of input
 */


// Specify Upper and Lower Number of Matches EXERCISE
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result9 = ohRegex.test(ohStr);
/**
 Remember to use \s after Oh{3,6} to include a white space, followed by no to pass all test cases. All test cases are written using a capital O, however the testcases could also be passed by using ignore-case : /oh{3,6}\sno/i
 */



// Check For Mixed Grouping of Characters EXERCISE
/**
 Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
 */
let myString = "Eleanor Roosevelt";
let myRegex11 = /(Franklin|Eleanor)(n|[^n])(.*)Roosevelt/i; // Change this line
let result11 = myRegex.test(myString);



// REMEMBER: 
/**
 Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters.
 */