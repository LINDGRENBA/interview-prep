// You are given 2 32-bit numbers (N, M) and 2 bit positions (i, j).
// Write a method to insert M into N such that M starts at bit j and ends at bit i
// You can assume that the bits j through i have enough space to fit all of M. That is, if M = 10011, you can assume that there are at least 5 bits between j and i. You would not, for example, have j = 3 and i = 2 because M could not fully fit between bit 3 and bit 2. 

// In binary, 2147483647 is 01111111111111111111111111111111 and it's the biggest positive number that will fit in 32 bits

    N = 1024 (10000000000),
    M = 19 (10011),
    i = 2, j = 6 

    // 1024 + 19 = 10000010011  // NOT THE SOLUTION

    Output : 1100 (10001001100)

    // i  = n.length -i
    // j = n.length - j


// Example
// Input: N = 10000000000, M = 10011, i = 2, j = 6
// Output: N = 1000_10011_00

// Hints from the book:
// 1. Break this into parts. Focus first on clearing the appropriate bits.
// 2. To clear the bits, create a "bit mask" that looks like a series of 1s, then 0s, then 1s

// https://www.geeksforgeeks.org/inserting-m-into-n-such-that-m-starts-at-bit-j-and-ends-at-bit-i-set-2/



function addBits(N, M, i, j) {  // Input: N = 10,000,000,000, M = 10011, i = 2, j = 6
  let nArray = N.toString().split('').reverse();  // combined .toString() and .split() and .reverse()
  let mArray = M.toString().split('').reverse(); 
  for(let index = 0; i<=j; index++){  
    nArray[i] = mArray[index];
    i++;
  }
  // console.log("joined nArray: " + nArray.reverse().join(''));
  return nArray = nArray.reverse().join('');
}

addBits(10000000000, 10011, 2, 6);