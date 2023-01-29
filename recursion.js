function counterUp(start, end) {
    // log the number
    console.log(start)

    // what we want to do with the arg(start) saved in a variable as a state we can use in the inner function
    let countUp = start + 1;

    // base case --> the condition
    if (countUp <= end) {
        counterUp(countUp, end);
    }

}

counterUp(0, 5);