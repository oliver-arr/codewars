function comp(array1, array2) {}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

const b1 = [121, 144, 19, 161, 19, 144, 19, 11];
const b2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];

console.log(comp(a1, a2)); // true
console.log(comp(b1, b2)); // false
