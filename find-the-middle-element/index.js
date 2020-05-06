const gimme = function (inputArray) {
  const minNumber = Math.min(...inputArray);
  const minIndex = inputArray.indexOf(minNumber);
  const maxNumber = Math.max(...inputArray);
  const maxIndex = inputArray.indexOf(maxNumber);

  return inputArray.length - (minIndex + maxIndex);
};

console.log(gimme([2, 3, 1])); // 0
console.log(gimme([5, 10, 14])); // 1
console.log(gimme([3, 20, 19])); // 2
