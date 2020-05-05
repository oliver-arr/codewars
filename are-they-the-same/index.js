function comp(array1, array2) {
  const array2Copy = [...array2];

  array1.forEach((number) => {
    let matchedIndex = array2Copy.indexOf(number * number);

    if (matchedIndex > -1) {
      array2Copy.splice(matchedIndex, 1);
    }
  });

  return !array2Copy.length >= 1;
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

const b1 = [121, 144, 19, 161, 19, 144, 19, 11];
const b2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];

console.log(comp(a1, a2)); // true
console.log(comp(b1, b2)); // false: 36100 is not the square of any number in b1
