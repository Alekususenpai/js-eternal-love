/* You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.

-If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
-If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
-If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
-If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests. */


const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

////////////////////////////////////////////////////////////
// SOLUTION WITH EXPLANATION -->

function updateRecords(records, id, prop, value) {
  /* 1. Firstly, we separate the conditions on whether there'a VALUE or NOT. 
  If there's a value, we continue to check for other conditions. */
  if (value) {

    /** 2. Then we check IF the passed prop is 'tracks'.  */
    if (prop === 'tracks') {

      /** 3. IF the object (records) and property (id) has a prop named 'tracks', we proceed to push the passed value which will set it as the last element in the array */
      if (records[id].hasOwnProperty('tracks')) {
        records[id][prop].push(value);

        /** 3. IF not, set the 'tracks' prop with the passed value */
      } else {
        records[id][prop] = [value]; 
      }

      /** 2. IF the passed prop is not 'tracks', we proceed setting the passed prop and value on the correct object and property (id) */
    } else {
      records[id][prop] = value;
    }

    // 1. If there's no value, we delete the passed prop.
  } else {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');