/** Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

 */

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {

    // 1.  we start looping through the array with objects with a FOR LOOP 
    for (let i = 0; i < contacts.length; i++) {

        // 2. the goal is to find if the passed argument name matches any of the objects's firstName
        // for that reason, we separate the code in two sections, if there's a MATCH 
        if (name === contacts[i].firstName) {

            // 3. if the name matches AND that object has the passed property, then we return that prop's value with --> return contacts[i][prop]; 
            // [prop] used to search for that prop
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];


            // 3. if NOT, we return 'No such property'
            } else {
                return 'No such property'
            }


        }
    }

    // 2. or if there's NOT A MATCH, if nothing matches in the FOR LOOP
    return 'No such contact'
}

