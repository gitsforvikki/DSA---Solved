/**
 * Write a function to return numbers of dogits in a number
 */

function countDigit(n) {
    //handle 0
  if (n === 0) return 1;
  let count = 0;
  //handle negative numbers, convert it to positive
  n = Math.abs(n);
  while (n != 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let result = countDigit(12);
console.log(result);
