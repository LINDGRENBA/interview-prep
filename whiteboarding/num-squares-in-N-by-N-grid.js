// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

function pyramidal(base){
  let pyramidalSum = 0;

  for(let i = base; i > 0; i--){
    pyramidalSum += i*i
  }
  return pyramidalSum;
}



// Examples
// numberSquares(2) ➞ 5 

// numberSquares(4) ➞ 30 // individual square -> 2x2 qu.4 = 9; 3x3 qu.4 = 4; 4x4 qu.1 = 1; + 1x1 = 16;

// numberSquares(5) ➞ 55
// Notes
// Input is a positive integer.
// Square pyramidal number.

// Procedure
// 1. Take n and list all integers between n and 0.
// 2. Square the list and add each element/integer
// 3. Add all of the elements together. = Result
// 4. Return the result.

// function decrementer (n) { //n = 3
//   listArray = [];
//   let squaredSum = 0;
//   for (let i=n; i >= 0; i--) { //3 -> 3,2,1
//     //listArray.push(i * i); // [3,2,1]  (3,2,1)ex2
//     squaredSum += i*i;
//   }
//   return squaredSum;
// }