const arr = [
    { product: 'apple', price: 33 },
    { product: 'orange', price: 99 },
    { product: 'broccoli', price: 37 },
    { product: 'pear', price: 24 },
    { product: 'banana', price: 99 },
]


// The reduce params are 1. function and 2. starting point

/**
 * the function params are:
 * 1. accumulator - the thing we are reducing our value to
 * 2. each individual item
 */

const totalPrice = arr.reduce((total, item) => {
    return total += item.price
}, 0)

console.log(totalPrice);

