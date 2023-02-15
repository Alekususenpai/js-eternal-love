/**
 * Falsy Bouncer
 * 
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

 */


function bouncer(arr) {
    const newArr = [...arr];
    const clean = [];
    newArr.map(el => {
        if (Boolean(el)) {
            clean.push(el)
        }
    })
    return clean;
}

bouncer([false, null, 0, NaN, undefined, ""]);  