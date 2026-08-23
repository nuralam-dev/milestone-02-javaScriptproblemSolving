function filterEvenPositionWords(sentence) {
  let word = sentence.split(" ");
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result.push(word[i]);
    }
  }
  return result.join(" ");
}
console.log(
  filterEvenPositionWords("The quick brown fox jumps over the lazy dog"),
);
