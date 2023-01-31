
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};

// Object.freeze(obj) is used to prevent data mutation.
// It freezes the passed object so that no one is able to alter the value of it, add, or delete properties.

Object.freeze(obj);
obj.review = "bad";

// output is [TypeError: Cannot assign to read only property 'review' of object '#<Object>']!

obj.newProp = "Test";
console.log(obj); 
