function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((word) => word.length)
  );
}

console.log(findShort("This is a short sentence")); // 1
console.log(findShort("Find short word")); // 4
