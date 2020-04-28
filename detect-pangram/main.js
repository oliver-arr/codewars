function isPangram(string) {
  const charCodes = [];
  const str = string.toLowerCase().split("");

  // fill charCodes array with the unicode values for a-z (97 - 122)
  for (let i = 97; i <= 122; i++) {
    charCodes.push(i);
  }

  // check for pangram
  str.forEach((char) => {
    const isCharCodeAMatch = charCodes.includes(char.charCodeAt(0));
    const charIndex = charCodes.indexOf(char.charCodeAt(0));

    if (isCharCodeAMatch) {
      charCodes.splice(charIndex, 1);
    }
  });

  return !charCodes.length;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
