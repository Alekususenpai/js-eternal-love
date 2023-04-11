/** Wherefore Art Thou
 * 
 * You are given an array of objects. The goal of the function is to look through the collection array of objects and return an array of all the objects that have matching name and value pairs as the source object.

Every name and value pair of the source object has to be present in the object from collection. */

function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  const res = collection.filter((obj) => {
    for (let i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
