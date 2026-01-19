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

// let numberOfDigits = countDigit(12);
// console.log(numberOfDigits);

function isPalindrome(n) {
  if (n < 0) return false;

  let originalNumber = n;
  let revs = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    revs = revs * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  return revs === originalNumber;
}

console.log(isPalindrome(1441));
