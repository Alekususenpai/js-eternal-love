const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

// Counting the users that are online **

function countOnline(usersObj) {

  // initiate an empty array
  const num = [];

  // loop through the obj getting the keys
  for (let user in usersObj) {

    // access the values search the object through the keys
    if (usersObj[user].online) {

      // if the user is online (=== true), push it to the array
      num.push(usersObj[user].online)
    }
    // otherwise, do nothing
  }

  // return the number of elements in the array
  return num.length;
}

console.log(countOnline(users));