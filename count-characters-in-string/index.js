const count = (string) => {
  const characterCounter = {};

  string.split("").forEach((character) => {
    if (Object.keys(characterCounter).includes(character)) {
      characterCounter[character] += 1;
    } else {
      characterCounter[character] = 1;
    }
  });

  return characterCounter;
};

console.log(count("a"));
console.log(count("aba"));
console.log(count("hello world"));

module.exports = count;
