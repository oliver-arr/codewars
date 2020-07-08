function incrementString(strng) {
  let strArray = strng.split("");

  let filteredForNumbers = strArray.filter((char) => {
    return Number(char) >= 0;
  });

  let filteredForNonNumbers = strArray.filter((char) => {
    return isNaN(char);
  });

  const isAllZeros = (chars) => chars.every((num) => num === "0");

  const leadingZeroCount = () => {
    let index = 0;
    let count = 0;
    while (filteredForNumbers[index] === "0") {
      count += 1;
      index += 1;
    }
    return count;
  };

  if (filteredForNumbers.length > 0) {
    if (isAllZeros(filteredForNumbers)) {
      let lastZero = Number(filteredForNumbers.pop());
      let addOne = (lastZero += 1);
      filteredForNumbers.push(String(addOne));
      return filteredForNonNumbers.join("") + filteredForNumbers.join("");
    } else {
      let numberToIncrease = Number(
        filteredForNumbers.slice(leadingZeroCount()).join("")
      );
      let addOne = (numberToIncrease += 1);
      return (
        filteredForNonNumbers.join("") +
        String(addOne).padStart(filteredForNumbers.length, "0")
      );
    }
  } else if (filteredForNumbers.length === 0) {
    return strng + 1;
  }
}

console.log(incrementString("foo")); // foo1
console.log(incrementString("bar18")); // bar19
console.log(incrementString("cazbar0080")); // caz0081
console.log(incrementString("foobar000")); // foobar001
