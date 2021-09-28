# Problem Solving Practice

## Steps of the software development process

1. Based on a given starting point (feature, task, code block, etc.), what is the expected end result?
2. What are the written-out steps to go from point A to point B? You need to solve the problem before you begin coding it.
3. Implementation (coding it out, researching)
4. Test and debug code (run code with breakpoint, unit test, etc.)
5. Refactor if necessary. Test again. This continues until functionality is solidified.

The above steps should be rinse and repeated for every single problem you encounter. Ignoring these steps or straying from them will result in the long way around to solving a problem or even possibly never solving the problem.

To be a good problem solver, it is important to be able to break problems down. One way to go about this is to write out the steps it will take to solve the problem. These steps are written down in English in a manner that are easily explainable to someone who may not be technical. The idea is that in order to code something out, you first need to have a good understanding of what it is you are attempting to solve.

For each of the problems below, write out the steps it will take to go about solving the problem. Then code it out and test!
You may jump around in these problems. If you get stuck on one problem, begin working on another. If you get stuck on that new problem, go back to working on the previous one.

The use cases below are just examples to give you a better idea of what might be passed into the method or what might be outputted from the method. You shouldn’t be coding exactly to these examples, but rather, be flexible to handle any data of that data type.
Whiteboard Challenges

## Part 1

### Problems to solve using JavaScript

1. Reverse a string
    - Write code that takes a string as input and returns the string reversed
    - i.e. “Hello” will be returned as “olleH”
2. Capitalize letter
    - Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”
3. Compress a string of characters
    - For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"
4. BONUS CHALLENGE: Palindrome
    - A word, phrase, or sequence that reads the same backward as forward i.e. madam
    - Write code that takes a user input and checks to see if it is a Palindrome and reports the result

## Part 2

1. Happy Numbers
   - https://en.wikipedia.org/wiki/Happy_number
   - A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
   - Write a method that determines if a number is happy or sad
2. Prime Numbers
   - A prime number is a number that is only divisible by one and itself.
   - Write a method that prints out all prime numbers between 1 and 100
3. Fibonacci
   - A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
   - Write a method that does the Fibonacci sequence starting at 1
   - HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs

## Part 3

1. Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
   - Use Case:
   - Given numbers in an array: [5, 17, 77, 50]
   - Target: 55
2. Palindrome is a word, phrase, or sequence that reads the same backward as forward i.e. madam. Write code that takes a user input and checks to see if it is a Palindrome and reports the result. You must handle spaces.
3. Given a list of integers, return a bool that represents whether or not all integers in the list can form a sequence of incrementing integers
   - Use case:
   - {5, 7, 3, 8, 6} = false (no 4 to complete the sequence)
   - {17, 15, 20, 19, 21, 16, 18} = true
4. Create a method that takes an array of positive and negative numbers. Return an array where the first element is the count of the positive numbers and the second element is the sum of negative numbers.
   - Use case: [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21]
5. Create a method that accepts a string of space separated numbers and returns the highest and lowest number as a string
    - Use case: “3 9 0 1 4 8 10 2” = “0 10”
6. Create a method that accepts a string, check if it’s a valid email address and returns either true or false depending on the valuation. Think about what is necessary to have a valid email address.
    - Use case:
    - “mike1@gmail.com” = true
    - “gmail.com” = false
7. Create a method that takes in a string and replaces each letter with its appropriate position in the alphabet and returns the string
    - Use case:
    - “abc” = “1 2 3”
    - “coding is fun” = “3 15 4 9 14 7 9 19 6 21 14”
8. A briefcase has a four-digit rolling-lock. Each digit is a number from 0-9 that can be rolled either forwards or backwards. Write a method that returns the smallest number of turns it takes to transform the lock from current combination to the target combination. One turn is equivalent to rolling a number forwards or backwards by one.
    - Use case:
    - Current lock: 3893
    - Target lock: 5296
9. Given a number, return the reciprocal of the reverse of the original number, as a double.
    a. Use case: If given 17, return 0.01408 (1/71)

## Part 4

1. Write a method that prints the next 20 leap years.
2. Write a method that finds the longest palindromic substring of a given string.
3. Write a method to convert a given number to hours and minutes.
4. Write a method to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
5. Write a method to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
6. Write a method to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
7. Write a method to check if a given string contains equal number of p's and t's present.
8. Write a method to compute the sum of all digits that occur in a given string.
9. Write a method to check whether a given fraction is proper or not.
   Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.
10. Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
    Problem Solving With Arrays
11. Write a method that returns the largest element in an array.
12. Write a method that rotates a list by k elements. You input a value for k that represents how many places in the array you want to rotate by. For example, if k is rotated by 2, [1,2,3,4,5,6] becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the array. How many swap or move  operations do you need?
13. Write methods that add, subtract, and multiply two numbers in their digit-array representation (and return a new digit list). If you’re ambitious you can implement Karatsuba multiplication. Try different bases. What is the best base if you care about speed?

## Part 5

1. Create a method to print duplicate characters from a string
2. Create a method that reverses a string using recursion. You may not use any built-in class library methods.
3. Create a method that counts the number of vowels and consonants in a given string.
4. Create a method that finds all the permutations of a given string.
5. Create a method that takes in two rectangle objects and checks if two rectangle objects overlap each other.
6. Implement a quicksort algorithm, insertion sort algorithm, or bucket sort algorithm (all three for the extra challenge)
