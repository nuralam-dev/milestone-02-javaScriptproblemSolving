function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let lowerStr = str.toLocaleLowerCase();
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < lowerStr.length; i++) {
    let char = lowerStr[i];
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
let string = "The quick brown fox jumps over the lazy dog";
let vowel = string;
console.log(countVowels(vowel));
