// Function expressions return a value saved in a variable. 

// It is not hoisted since it's a variable and it doesn't get placed in memory as whole. Therefore it cannot be called before being run.

// Ex. anonymousGreet() results in --> Uncaught TypeError: anonymousGreet is not a function

var anonymousGreet = function () {
    console.log('Anonymous Hi!')
}

anonymousGreet();


// Function statements just do work but don't return a value --> Ex. if (a === 5)

// When it's evaluated, it doesn't result in a value. The function is placed in memory but it doesn't return a value until the function is executed/called. 
// It IS hoisted and IS available ahead of time because it is placed in memory as a whole during the execution context.

greet();

function greet() {
    console.log('Greetings human!')
}

// Function executer - made to call passed function as parameter

function execute(a) {
    console.log('Function called from an execute function!');
    console.log('This is the function: ' + a)
    a();
}

execute(greet);