/**
 * Confirm the Ending
 * 
Check if a string (first argument, str) ends with the given target string (second argument, target).
 */


// BUILT IN METHOD ES6
function confirmEnding(str, target) {
    if (str.endsWith(target)) {
        return true
    }
    return false;
}



// OLDER WAY
function confirmEnding(str, target) {

    // use slice to get the string's ending in the target's length 
    // using - starts from the end in the number of the targets char length
    let ending = str.slice(-target.length)

    // check if they match
    if (ending === target) {
        return true
    }
    return false
}

// or


function confirmEnding(str, target) {
    return str.slice(-target.length) === target
}


confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

confirmEnding("Bastian", "n");