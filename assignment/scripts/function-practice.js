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
  for (i = 0; i < numbers.length; i++);
  // TODO: loop to add items
  //sum = numbers.reduce; Nope
  //numbers.reduce = sum; Nope
  //sum += numbers[i]; Nope
  //sum = numbers.reduce[i]; Nope
  //sum.push(numbers); No this seems like a super redundant step... the numbers are already in an array!
  console.log(`inside sumAll`, numbers);//testing
  sum += numbers;//***this makes array items visible in test log, otherwise empty***
  //return sum.reduce;
  return sum;//***this makes array items visible in test log, otherwise Undefined***
}
console.log(`test log; should be 10: ${sumAll(numberArray)}`);
sumAll(numberArray);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let manyNumbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumberArray = [];

// function evenNumbers( value, array ){
//   //console.log(`inside evenNumbers`);- just for testing purposes
// //   for (i = 0; i < array.length; i++)
// //   //if ([value]%2=0) {
// //     value.push();
// //   }//end if
// //   //return value;
// //   //return true;- just for testing purposes
// // }//end evenNumbers
// // //console.log(`should say true: ${evenNumbers(manyNumbers)}`); - just for testing purposes
// // evenNumbers(manyNumbers);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
