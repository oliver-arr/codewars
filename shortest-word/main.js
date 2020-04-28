function findShort(s) {
  let wordLength = s.split(" ")[0].length;

  s.split(" ").forEach((word) => {
    if (word.length < wordLength) {
      wordLength = word.length;
    }
  });
  return wordLength;
}

console.log(findShort("This is a short sentence")); // 1
console.log(findShort("Find short word")); // 4
