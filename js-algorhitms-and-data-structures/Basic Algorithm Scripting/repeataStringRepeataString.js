/**
 * Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
 */

function repeatStringNumTimes(str, num) {

    // initialise an empty string variable
    let concat = '';

    // while the number of repetitions is greater than 0, keep looping
    while (num > 0) {

        // minus 1 from num each time
        num--;

        // add the string to concat each time
        concat += str;
    }
    return concat;
}

repeatStringNumTimes("abc", 4);