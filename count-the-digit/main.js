function nbDig(n, d) {
  const squared = [];

  // squares all numbers upto and including n
  for (let i = 0; i <= n; i++) {
    squared.push(String(i ** 2));
  }

  // find the number of digits (d) in each square number
  const digits = squared.reduce((acc, sqNum) => {
    sqNum.split("").forEach((digit) => {
      if (Number(digit) === d) {
        acc++;
      }
    });
    return acc;
  }, 0);

  return digits;
}

console.log(nbDig(5750, 0)); // 4700 digits 0
console.log(nbDig(25, 1)); // 11 digits of 1
console.log(nbDig(12224, 8)); // 7733 digits of 8
