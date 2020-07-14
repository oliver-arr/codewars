const count = (string) => {
  const characterCounter = {};

  string.split("").forEach((character) => {
    characterCounter[character]
      ? characterCounter[character]++
      : (characterCounter[character] = 1);
  });

  return characterCounter;
};

module.exports = count;
