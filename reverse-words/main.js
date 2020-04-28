function reverseWords(str) {
  let strAsWords = str.split(" ");
  let reversed = [];

  const reverseWord = (word) => {
    const wordLength = word.length;
    let reversedWord = [];

    for (let i = 0; i < wordLength; i++) {
      reversedWord.unshift(word[i]);
    }

    return reversedWord.join("");
  };

  strAsWords.forEach((word) => {
    const reversedWord = reverseWord(word.split(""));

    reversed.push(reversedWord);
  });

  return reversed.join(" ");
}

console.log(reverseWords("a")); // a;
console.log(reverseWords("a  p")); // p  a;
console.log(reverseWords(" apple")); // ' elppa';
console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // 'ehT kciuq nworb xof spmuj revo eht yzal .god';
