// Da trvlin' sayels pirson  #1

/* 
  A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home.

  Return the total number of possible paths a salesman can travel, given n cities.

  Examples
  paths(4) ➞ 24
  4*3*2*1 

  paths(1) ➞ 1

  paths(9) ➞ 362880
  9*8*7*6*5*4*3*2*1
*/
/* 
Cities:
A

B

C

D

Paths:
set of 6 with starting city A:
1. a=>b=>c=>d=>a // there are 4 => paths
2. a=>b=>d=>c=>a 
3. a=>d=>b=>c=>a
4. a=>d=>c=>b=>a
5. a=>c=>d=>b=>a
6. a=>c=>b=>d=>a

7. b=>c=>d=>a=>b
8. b=>c=>a=>d=>b
9. b=>d=>c=>a=>b
11.b=>d=>a=>c=>b
12.b=>a=>c=>d=>b
13.b=>a=>d=>c=>b





Distances:
{a,b} = 2
{b,c} = 3
{c,d} = 4
{d,a} = 5

trip 1. a=>b=>c=>d=>a
distance === 14

trip 7. b=>c=>d=>a=>b
distance === 14

trip 11.b=>d=>a=>c=>b
distance === 
*/


function factorial(num){
  let factorialSum = 1;

  for(let i = num; i > 0; i--){
    factorialSum *= i
  }
  return factorialSum;
}

