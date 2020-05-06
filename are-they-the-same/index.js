function comp(array1, array2) {
  // square numbers in array1
  const squared = array1.map((number) => {
    return number * number;
  });

  // check if all numbers are the same
  array2.forEach((number) => {
    let index = squared.indexOf(number);

    if (index !== -1) {
      squared.splice(index, 1);
    } else if (number === null) {
      return;
    }
  });

  return !squared.length;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

b1 = [121, 144, 19, 161, 19, 144, 19, 11];
b2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a1, a2)); //true
console.log(comp(b1, b2)); //false
