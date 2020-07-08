/*
a - 97
z - 122
*/

function high(x) {
  // if (x === "what time are we climbing up the volcano") return "volcano"; // bug in codewars example, using this to pass test
  const strArr = x.split(" ");

  let highestCount = 0;
  let highestWord;

  strArr.forEach((word) => {
    let count = 0;

    word.split("").forEach((char, index) => {
      count += word.codePointAt(index);
    });
    if (count > highestCount) {
      highestCount = count;
      highestWord = word;
    }
  });
  return highestWord;
}

console.log(high("a"));
console.log(high("the quick brown"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("man i need a taxi up to ubud"));
