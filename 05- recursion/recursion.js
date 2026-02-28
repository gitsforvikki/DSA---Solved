//write a function for print 10 to 1

function print(nums) {
  if (nums <= 0) return;
  console.log(nums);
  nums = nums - 1;
  print(nums);
}

const a = 10;
// print(a);

//write a function for print 1 to 10

function printOne(nums) {
  if (nums > 10) return;
  console.log(nums);
  printOne(++nums);
}
// printOne(1);

/**
 * calculate the sum of n numbers with recursion
 */
function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

// console.log("Sum of 10 numbers: " + sum(10));

/**
 * calculate the sum of all numbers of a array
 */

let array = [1, 2, 3, 4, 5];

// Approach -01
function arraySum(arr) {
  if (arr.length == 0) return 0;
  return arr[0] + arraySum(arr.slice(1, arr.length));
}
// console.log(arraySum(array));
/**
 * here is the one problem in above solution and that is , On each iteration/call of recursve function create a brand new
 * array which take extra space and space complexity goes to the O(n^2)
 * So below is the optimized solution based on index
 *
 */

//Approach -02

function arraySum2(arr, index = 0) {
  if (index == arr.length) {
    return 0;
  }
  return arr[index] + arraySum2(arr, index + 1);
}
// console.log(arraySum2(array));

/**
 * some of all even numbers in a array
 */

function evenSum(arr, n) {
  if (n == 0) return arr[0] % 2 == 0 ? arr[0] : 0;
  return arr[n] % 2 == 0 ? arr[n] + evenSum(arr, n - 1) : evenSum(arr, n - 1);
}

// console.log(evenSum(array, array.length - 1));

/**
 * Calculate factorial of a number
 */
function calcFactorial(n) {
  if (n < 1) return 1;
  return n * calcFactorial(n - 1);
}

// const factorial = calcFactorial(5);
// console.log("factorial " + factorial);

/**
 * Is a number power of two
 */

function powerOfTwo(n) {
  if (n == 1) return true;
  if (n < 1 || n % 2 != 0) return false;
  return powerOfTwo(n / 2);
}
// console.log(powerOfTwo(160));

/**
 * Fibonacci series:- This is the series where each number is the sum of its two preceding number and first two numbers are 0 and 1
 *  respectively. that is 0,1,1,2,3,5,8,13,21......
 */

//find out the number at the nth position in the fibonacci series

/**
 * this below function will forming two branchs of it at every recursive call as we are 
 * return two function call like   fin(n - 1) + fib(n - 2). When it reach to the base case it bubble up and keep
 * calculation the values
 */

function fib(n) {
  if (n >= 30 || n < 0) return "Invalid input";
  if (n == 0 || n == 1) return n;
  return fin(n - 1) + fib(n - 2);
}
