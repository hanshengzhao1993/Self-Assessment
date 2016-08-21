# JSFUndamentals Self Assessment

## Guidelines

- You should be able to finish this self assessment by Satruday Night.

- This Self-assessment is meant to give you an idea of how well you understand--or can figure out--the material that you covered recently.

- What you see is what you get--most of the time we don't include outside libraries.

- You can use outside resources including your notes, google, stackoverflow, etc.

- WARNING NO TESTS: As you can see, we haven't provided any tests. This is so that you can practice debugging without them. Copy and paste your code into your Chrome Console for a quick and easy way to test your code.


## Grading Outline


HTML&CSS: Mostly Complete

FizzBuzz: Complete


## Self-Grading Process

After you complete each prompt, assign a grade to each item in the above Grading Outline, using this Grading Scale:

### Self-Assessment Grading Scale:

Qualitative grade | Meaning
---|---
Complete             | You believe your solution to be fully complete and meeting the specified requirements.
Mostly complete      | Your solution is well on its way to being complete, but you ran out of time or can't remember exactly how to do *one* particular aspect. You believe anyone who understands the problem well would endorse your solution as the right one, and know pretty clearly how to finish up any last touches.
Significant progress | You have the right idea and were heading in a good direction. Covers everything between Mostly Complete and Attempted.
Attempted            | You were very challenged by the prompt and had trouble making any significant progress on the problem, but wrote at least one meaningful line of code that appears to be a genuine attempt.
Not attempted        | Whether you've thought much about the problem or not, you have no lines of code to show for the problem. (Note, you should avoid ever getting into a situation where this is the grade you'd give yourself. Make a passing attempt at each problem before going back to complete any one problem.)

#### Example Submission:

FizzBuzz: ATTEMPTED
HTML&CSS: COMPLETE 


### Starting every problem

You are expected to at least start every problem. As with any test, you make the most progress in the first few moments of work on each question, and we don't want you losing out on credit you could collect just because you get fixated on one or two questions. Do an initial pass to get the easiest answers out of your system, then go back and improve anything you can.


## Submitting Solutions

**VERY IMPORTANT: Before submitting your solutions, find and fix all syntax errors**

Solutions are submitted via pushing your code to your OWN FORKED repository. We will take it from there.

## Problems

This assessment contains folders that correspond to the prompts listed below. Complete the instructions in the file, `README.md` within each folder (reproduced below).

### HTML&CSS Assessment:

1. create an input tag, and give it an id "addInput"

2. create a list item and give it some text.

3. create a second list item and give it some text.

4. Link your `list.css` sheet to your HTML file.

5. add the "listItem" class your two list items. Your `listItems` should be blue.

6. In your `list.html` file add an "importantItem" id to your second `listItem`.

7. In your `list.css` change the text color for your `importantItem` to red.

8. Question: Why does adding an ID change the color of the list item? *Answer this in your list.css file*

9. Use a script tag to add the `list.js` to your list app. This will import that pre-written JavaScript that will make your list application dynamic. 

You should now be able to add new list to your list when you type in your input and press enter.

10. Change the font of your title to `helvetica`.

11. Center your list & title.


### FizzBuzz Assessment:

[ Complete] Create a function, fizzBuzz that takes a number as a parameter and:

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

[ Complete] Create a function, isListFizzOrBuzz, that takes an array of numbers as an input and returns:
 
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
