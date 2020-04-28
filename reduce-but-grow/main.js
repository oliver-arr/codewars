function grow(x) {
  return x.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
}

console.log(grow([1, 2, 3])); // 6);
console.log(grow([4, 1, 1, 1, 4])); // 16);
console.log(grow([2, 2, 2, 2, 2, 2])); // 64);
