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
  return words.join(" ");
}

console.log(capitalizeAllFirstLetters("Let's capitalize some words!"));

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
  return compressed;
};

console.log(compressString("aaabbbcccdddeeefff"));
console.log(compressString("abcdaabbccddaaabccdeefggg"));

// Check if word is palindrome (same backwards as it is forward)
const checkForPalindrome = function (str) {
  let reverse = reverseStringBuiltInMethods(str);
  return str === reverse ? "A Palindrome" : "Not a palindrome";
};

console.log(checkForPalindrome("Nope"));
console.log(checkForPalindrome("mom"));

//////////PART 2////////////////
// Check if number is happy or sad
// Happy number = start with positive #, replace it with sum of squares of its digits, repeat until number equals 1, i.e. 19 is happy
const getSumFromIntegersSquared = function (num) {
  let sum = 0;
  let nums = num.toString().split("");
  for (let i = 0; i < nums.length; i++) {
    let square = Math.pow(nums[i], 2);
    sum = sum + square;
  }
  return sum;
};

const numberIsHappy = function (num) {
  let sums = [];
  let newNum = getSumFromIntegersSquared(num);
  while (!sums.includes(newNum)) {
    sums.push(newNum);
    newNum = getSumFromIntegersSquared(newNum);
  }
  return newNum === 1 ? "Happy!" : "Sad";
};

console.log(numberIsHappy(19));
console.log(numberIsHappy(2));

// Check if number is prime (only divisible by 1 and itself)
// Print all prime numbers between 1 and 100
const isPrime = (num) => {
  if (num <= 3) {
    return num > 1;
  }
  if (num === 5 || num === 7 || num === 11) {
    return true;
  }
  if (
    num <= 1 ||
    num % 2 === 0 ||
    num % 3 === 0 ||
    num % 5 === 0 ||
    num % 7 === 0 ||
    num % 11 === 0
  ) {
    return false;
  } else {
    return true;
  }
};

const listPrimes = (arr) => {
  return arr.filter((e) => isPrime(e));
};

let oneToOneHundred = [];
for (let i = 0; i < 100; i++) {
  oneToOneHundred.push(i + 1);
}
console.log(listPrimes(oneToOneHundred));

// Fibonacci sequence
const fibonacciSequence = (num, maxLength) => {
  let sequence = [];
  let number = num;
  let previous = 0;
  let i = 0;
  sequence.push(num);
  while (sequence.length < maxLength) {
    i++;
    sequence.push(number + previous);
    previous = number;
    number = sequence[i];
  }
  return sequence;
};

console.log(fibonacciSequence(1, 10));
