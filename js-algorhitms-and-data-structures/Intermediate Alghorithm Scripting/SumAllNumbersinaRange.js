function sumAll(arr) {
  const [a, b] = arr;
  if (a < b) {
    arr[0] = a;
    arr[1] = b;
  } else {
    arr[0] = b;
    arr[1] = a;
  }
  let l = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    l += i;
  }
  return l;
}

sumAll([5, 10]);
