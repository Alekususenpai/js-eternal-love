/**
 * Return Largest Numbers in Arrays
 * 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */


function largestOfFour(arr) {

    // initialise an empty array
    const nums = [];

    // loop through the arrays of first level 
    /**
     * You'll get:
    [ 17, 23, 25, 12 ]
    [ 25, 7, 34, 48 ]
    [ 4, -10, 18, 21 ]
    [ -72, -3, -17, -10 ]
     */

    for (let i = 0; i < arr.length; i++) {

        // set the first number of the array as largest? for later comparison with the rest of the nums
        let largestNum = arr[i][0];

        // start from index of 1 in order to compare the first with the second --> arr[i][0] > arr[i][j]
        for (let j = 1; j < arr[i].length; j++) {

            // if larger, assign it to the variable largestNum
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
        }

        // push the largest nums in one array
        nums.push(largestNum)
    }
    
    // return it
    return nums;
}



// OR



function largestOfFour(arr) {

    // map through the arr elements and find the largest num in each with Math.max passing the spread operator before 
    const result = arr.map(elem => Math.max(...elem))
    return result;
}


function largestOfFour(arr) {
    const result = arr.map(elem => Math.max.apply(null, elem))
    return result;
}


// NOTE: Both spread (...) and apply will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters. Reduce is said to not have that problem.


function largestOfFour(arr) {
    return arr.map(function (group) {
        return group.reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
    });
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);