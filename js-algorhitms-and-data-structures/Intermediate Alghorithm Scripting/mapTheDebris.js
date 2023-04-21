/** Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */

function calculate(num) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const c = Math.pow(earthRadius + num, 3);
  const b = Math.sqrt(c / GM);
  return Math.round(a * b);
}

function orbitalPeriod(arr) {
  return arr.map((el) => {
    return { name: el.name, orbitalPeriod: calculate(el.avgAlt) };
  });
}

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
