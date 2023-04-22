function rot13(str) {
  const alphabet = [];

  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  const indexes = str.split("").map((letter) => {
    return alphabet.indexOf(letter);
  });

  const decoded = indexes.map((el) => {
    let index = el - 13;
    if (el !== -1) {
      if (index < 0) {
        index = el + 13;
      }
    } else {
      return (index = "-");
    }
    return alphabet[index];
  });

  const indexDict = decoded.reduce((acc, val, i) => {
    if (val in acc) {
      acc[val].push(i);
    } else {
      acc[val] = [i];
    }
    return acc;
  }, {});

  let filtered = [];
  for (let key in indexDict) {
    if (indexDict[key].length > 1) {
      filtered = indexDict["-"];
    }
  }

  filtered.map((el) => {
    return (decoded[el] = str.split("")[el]);
  });

  return decoded.join("");
}

console.log(rot13("SERR CVMMN!"));
