/**
 * Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of
 */

function titleCase(str) {
    const toArr = str.split(' ');
    const newArr = [];
    for (let i = 0; i < toArr.length; i++) {
        newArr.push(toArr[i][0].toUpperCase() + toArr[i].slice(1).toLowerCase());
    }
    return newArr.join(' ');
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");