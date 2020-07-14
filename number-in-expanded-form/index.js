const expandedForm = (num) => {
  const numAsStr = num.toString();
  const strLength = numAsStr.length;

  const addZeros = () => {
    return numAsStr.split("").map((character, index) => {
      if (Number(character) !== 0) {
        return character.padEnd(strLength - index, "0");
      }
    });
  };

  return addZeros()
    .filter((n) => n)
    .reduce((accumulator, currentValue, index, array) => {
      return index === array.length - 1
        ? (accumulator += currentValue)
        : (accumulator += currentValue + " + ");
    }, "");
};

console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'
