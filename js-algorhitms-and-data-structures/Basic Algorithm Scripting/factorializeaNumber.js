/**
 * Factorialize a Number
 * 
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function. */


function factorialize(num) {

    // initialize a value to 1 
    let total = 1;

    // loop from 1 to num, multiply that with total add it each time
    for (let i = total; i <= num; i++) {
        total *= i;
    }

    return total;
}


// or - only if num is equal or greater than 0, otherwise be prepared to face --> Maximum call stack size exceeded

function factorialize(num) {

    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

