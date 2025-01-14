console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test

console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
    return `Hello ${name}!`;
  //(`Hello ${name}!`);
  //let name = 'Isidore' --no, don't need to declare this
  //return 'hello ' + name + "!"; --possible to set up like this but also not really needed
}
console.log (helloName('Usidore'));

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log(`Arguments in addNumbers: ${firstNumber}, ${secondNumber}`);
  let answer = firstNumber + secondNumber ;
  return answer;
  // return firstNumber + secondNumber;
}
console.log(`result of addNumbers 1 + 2: ${addNumbers(1,2)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  console.log(`Arguments in multiplyThree: ${num1}, ${num2}, ${num3}`);
  let answer = num1 * num2 * num3;
  return answer;
}
console.log(`Results of multiplyThree: ${multiplyThree(3,3,3)}`);


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( `isPositive - should say "true": ${isPositive(3)}` );
//Using the template literal changes the boolean to a string in the console
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
// //    array is empty, return `undefined`.
//const animalSounds = ['meow','woof','tweet'];
const emptyArray = []
const animalSounds = ['meow','woof','tweet']

function getLast(array) {
  const lastItem = array[ array.length - 1];
  console.log(`inside 'getLast': ${lastItem}`);
  if (lastItem === 0) {
    return 'undefined';
  }//So I learned that this If conditional is not necessary; the array returns as undefined by itself
    return lastItem;
}//end getLast
  //Oops of course this prints "tweet" without actually invoking the function=> console.log(`The last item is ${lastItem}`);
console.log(`The last sound is ${getLast(animalSounds)}`);
console.log(`The empty array shows as ${getLast(emptyArray)}`);//I just wanted to invoke this function a with an empty array next to the animalSounds
getLast(animalSounds);

// function getLast( array ) {
//   return array[array.length-1];
// }
//Note to self: This^ was Maggie's solution which makes sense and is more succinct

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
const fruits = ['apple','banana','orange','watermelon']

function find( value, array ){
  let found = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] == value){
      found = true;
    }//end true?
  //console.log(found); <=this will log combinations of true and/or false each time as the loop iterates through the items in the array
}//end looping?
  return found;
}//end find
console.log(`'Watermelon' was found: ${find('watermelon',fruits)}`);
console.log(`'Monkey' was found: ${find('monkey',fruits)}`);//Again, I just wanted to see them both

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  //letter = string.charAt(0); No, redundant! duh
  if (letter == string.charAt(0)){ //error "unexpected identifier"
  console.log(`Test: inside isFirstLetter`);
  return true;
    }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numberArray = [2,2,2,2,2];

function sumAll(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++){//I was missing these curly braces and it drove me crazy!
  // TODO: loop to add items
  //sum = numbers.reduce; Nope
  //numbers.reduce = sum; Nope
  //sum += numbers[i]; Nope <=YES THIS WAS RIGHT LOL (some other syntax was wrong)
  //sum = numbers.reduce[i]; Nope
  //sum.push(numbers); No this seems like a super redundant step... the numbers are already in an array!
  //console.log(`inside sumAll`, numbers);//(prints 5x as it iterates)
  sum += numbers[i];//***this makes array items visible in test log, otherwise empty***
  }//return sum.reduce;
  return sum;//***this makes array items visible in test log, otherwise Undefined***
}
console.log(`test log; should be 10:`,sumAll([2,2,2,2,2]));
sumAll(numberArray);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let mixedNumbers = [-1,0,5,10];
let positiveArray = [];

function positiveNumbers( array ){
  //console.log(`inside positiveNumbers`);- just for testing purposes
  for (i = 0; i < array.length; i++){
    if (array[i] > 0){
    positiveArray.push( array[i] );
    //console.log(`${positiveArray}`); shows values as they accumulate (as they are pushed)
      }//end if statement
    }//end for loop
    return positiveArray;
  }//end positiveNumbers
console.log(`should show positiveNumbers: ${positiveNumbers(mixedNumbers)}`);


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//"Filter out Strings from an Array"
//Problem: Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.
let wackyArray = [0,'kazoo',21,'pie',64000,'shenanigans'];
let positiveIntegers = [];

function filterArray( array ){
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
    //console.log(`after if`);
    positiveIntegers.push((array[i]));
    //console.log(`after for`);
    }//end if statement
  }//end for loop
  return positiveIntegers;
}//end filterArray
console.log(filterArray(wackyArray));

console.log(`this one should be converted to strings: ${filterArray(wackyArray)}`);
//***Update: figured it out// Why does the above log make the positiveIntegers integers array have the same values twice??!
console.log(positiveIntegers);
console.log(wackyArray);
console.log(filterArray(wackyArray));
//Takeaway: As written, everytime the function is called it will ALWAYS push to positiveIntegers, which will store/accumulate all the values. So it will grow and grow, and in this case always be the same filtered values from wackyArray. So a solution could be to empty positiveIntegers BEFORE pushing to it!!
//Another takeaway! It might be handy to have an array that continually accumulates those pushed values, depending on its purpose.
