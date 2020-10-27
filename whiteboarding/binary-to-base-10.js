
// take an array of 0s and 1s
// return the base ten equivalent

// ex: 
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11



// P: Understand the Problem - look for implicit and explicit requirements, what's the input, what's the output, restate the problem in a different way, ask questions
/*
  input: array
  output: int
  dealing with powers of 2
*/

// E: Examples and Test Cases - start with some plain language examples, write out a few test cases

toBaseTen([0, 0, 0, 1]) // 1
toBaseTen([0, 0, 1, 0]) // 2
toBaseTen([0, 1, 0, 1]) // 5
toBaseTen([1, 0, 0, 1]) // 9
toBaseTen([0, 0, 1, 0]) // 2
toBaseTen([0, 1, 1, 0]) // 6
toBaseTen([1, 1, 1, 1]) // 15
toBaseTen([1, 0, 1, 1]) // 11


// D: Data Structure - (array, dictionary, tuple, heap, linked list), expect varied time investment depending on which data structure you need and what the challenge is, brainstorm pros and cons of each data type and how you can approach the problem
/*
  I know that if we keep this in array form, we can loop through it
*/

// A: Write an Algorithm - (this is basically pseudocode to express your plan of attack)
/*
  loop through the array
  the item in index 0 should be multiplied by 2 to the power of array.length - 1 
  add each result together
  return the final integer which should be the base ten equivalent of the binary number made by the array
*/

// C: Code - code with intention, follow your algorithm, can test as you go if it's more complex / long

// Britt's solution
  function toBaseTen(arr){  // [0, 0, 1, 0]
    let baseTen = 2;  
    let powerOf = arr.length - 1;  // 0
    for(let i = 0; i < arr.length; i++){
      baseTen += array[i] * Math.pow(2, powerOf);   // 2 to pow of 3 = 8
      powerOf--;
    }
    return baseTen;
  }

toBaseTen([0, 0, 1, 0]);


// Britt's attempt at recursion
function toBaseTen(arr, counter){
  // set the accumulator here
  if(counter === ""){
    return;
  }
  if(arr.length === 0){
    return baseTen;
  }
  0 * (arr[counter] ** arr.length - 1);
  // toBaseTen(arr.pop() or splice())
}

toBaseTen([0, 0, 1, 0]);
//Sudo's recursive function
function toBaseTen(arr, exp = 0, acc = 0) {
  //error handling here if you want
  if (arr.length === 0) {
    return acc;
  }
  const base = arr.pop(); // 0
  return toBaseTen(arr, exp + 1, acc + base * Math.pow(2, exp));
}
// 0 to the 0 power = 1
// 0 to any other power is 0

// Finally, can follow up and ask if there's anything else you should do
/*
  "I can refactor this and make it a little neater. Is that something you'd like me to do?"
*/


//For any array, the last number is x**0, where x is the base, and then each previous index  increases the power by 1
//So starting at the rear index, multiply that number by it's relevant power, and then add to the result.

const base10izer = (arr) => {
  let result = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    result += arr[arr.length-i] * (2 ** i);
  }
  return result;
}

//Sudo's Haskell Version
const basechanger = base => arr => arr.reduce((acc, elem, index) => acc + elem * base ** (arr.length - index - 1), 0);

const fromBase2ToBase10 = basechanger(2);
const fromBase3toBase10 = basechanger(3);
fromBase2ToBase10([0, 0, 1, 0]) = 2;

// Noel's first solution that will take an array of varying lengths but will only evaluate sub array's with a length of 4
const binaryArrayToNumber = (arr, sum = 0) => {
	if(arr.length === 0){
    return sum;
  } else {
    const [eight, four, two, one, ...rest] = arr
    if(eight){sum += 8}
    if(four){sum += 4}
    if(two){sum += 2}
    if(one){sum += 1}
    return binaryArrayToNumber(rest, sum)
  }
}

// Noel's solution that will evaluate an array of any length but will continue to exponentially increase value of left most "1"'s
const binaryArrayToNumber = arr => {
	let i = 1;
  return arr.reduceRight((a, e) => {
    if(e){a += i}
    i *= 2;
    return a;
  }, 0)
}

// Second draft of above function but put the i variable into the function expression so that I could remove the curlys due to the implicit return
const binaryArrayToNumber = (arr, i = 1) =>
  arr.reduceRight((a, e) => {
    if(e){a += i}
    i *= 2;
    return a;
  }, 0);