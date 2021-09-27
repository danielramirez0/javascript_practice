"use strict";
//////////PART 1////////////////
// Reverse a string
const reverseStringManual = (string) => {
  let revStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    revStr += string[i];
  }
  return revStr;
};

console.log(reverseStringManual("This is backwards"));

const reverseStringBuiltInMethods = (str) => str.split("").reverse().join("");

console.log(reverseStringBuiltInMethods("This is backwards"));

// Capitalize first letter of each word separated by a space
function capitalizeAllFirstLetters(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = word[0].toUpperCase() + word.slice(1);
    words[i] = word;
  }
  return words;
}

console.log(capitalizeAllFirstLetters("This is a test"));

// Compress a string of characters
const compressString = function (str) {
  let letter;
  let compressed = "";
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    let j = i + 1;
    while (letter === str[j]) {
      i++;
      j++;
      counter++;
    }
    compressed = compressed + counter + letter;
    counter = 1;
  }
  return compressed
};

console.log(compressString("aaabbbcccdddeeefff"))
console.log(compressString("abcdaabbccddaaabccdeefggg"));

// Check if word is palindrome (same backwards as it is forward)
const checkForPalindrome = function (str) {
    let reverse = reverseStringBuiltInMethods(str)
    return str === reverse ? 'A Palindrome' : 'Not a palindrome'
}

console.log(checkForPalindrome('Nope'));
console.log(checkForPalindrome('mom'));


//////////PART 2////////////////
