function reverseString(str) {

    // initiate an empty variable 
    let newStr = "";

    // loop through the letters starting from the back (length-1 because of 0 index)
    for (let i = str.length - 1; i >= 0; i--) {

        // add those letters to the variable by calling the variable and adding one letter each time through the loop
        newStr = newStr.concat(str[i]);      // or newStr = newStr + str[i];
    }
    return newStr;
}

reverseString("hello");

