# FizzBuzz Assessment:

[ ] Create a function, fizzBuzz that takes a number as a parameter and:

If the number is divisible by 3, return "fizz"
If the number is divisible by 5, return "buzz"
If the number is divisible by 3 & 5, return "fizzbuzz"

Example:

```
var fizzTest = fizzBuzz(6);
console.log(fizzTest) // "fizz";

var buzzTest = fizzBuzz(10);
console.log(buzzTest) // "buzz";

var fizzBuzzTest = fizzBuzz(15);
console.log(fizzBuzzTest) // "fizzbuzz";

```

[ ] Create a function, isListFizzOrBuzz, that takes an array of numbers as an input and returns:
 
- "fizz" if most of the numbers in the array are divisible by 3

- "buzz" if most of the numbers in the array are divisible by 5

- "fizzbuzz" if most of the numbers in the array are divisible by 3 and 5.

Example:

```
var firstList = [3, 6, 10, 15, 17];

var testResult = isListFizzOrBuzz(firstList);
console.log(testResult) // "fizz"

var secondList = [21, 45, 20, 35, 52];
var testResult2 = isListFizzOrBuzz(secondList);
console.log(testResult2) // "buzz"

```