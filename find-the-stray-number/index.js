function stray(numbers) {
  const numberCount = {};

  numbers.forEach((number) =>
    numberCount[number] ? (numberCount[number] += 1) : (numberCount[number] = 1)
  );

  const numberCountArray = Object.entries(numberCount);
  const count = numberCountArray.map((count) => count[1]);
  const minCount = Math.min(...count);

  for (const property in numberCount) {
    if (minCount === numberCount[property]) return Number(property);
  }
}

console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
console.log(stray([8, 1, 1, 1])); // 8
