/** Sum All Primes
 * 
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

function sumPrimes(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

function isPrime(num) {
  // 1 and 0 are not prime numbers
  if (num <= 1) {
    return false;
  }

  // 2 and 3 are prime numbers
  if (num <= 3) {
    return true;
  }

  // Check if num is divisible by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  // Check if num is divisible by any number greater than 3 and less than or equal to the square root of num
  for (let i = 5; i <= Math.sqrt(num); i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.log(sumPrimes(977));
