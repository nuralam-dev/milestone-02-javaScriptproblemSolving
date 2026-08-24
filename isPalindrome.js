function isPalindrome(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let reverseWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverseWord += letter;
  }
  if (str === reverseWord) {
    return "true";
  } else {
    return "false";
  }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("dad"));
console.log(isPalindrome("nur alam"));

console.log(isPalindrome(6));
