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
  the item in index 0 should be multiplied by array.length - 1 to the power of 2 ... or is it 2 to the power of array.length - 1 ?
  add each result together
  return the final integer which should be the base ten equivalent of the binary number made by the array
*/

// C: Code - code with intention, follow your algorithm, can test as you go if it's more complex / long
/*
  WRITE CODE HERE
  then take your test cases from above, wrap them all in a big 'ol console log(test cases) and see if you get the expected output
*/

// Finally, can follow up and ask if there's anything else you should do
/*
  "I can refactor this and make it a little neater. Is that something you'd like me to do?"
*/