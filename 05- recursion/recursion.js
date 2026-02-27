//write a function for print 10 to 1

function print(nums) {
  if (nums <= 0) return;
  console.log(nums);
  nums = nums - 1;
  print(nums);
}

const a = 10;
// print(a);

//print 1-10
function printOne(nums) {
  if (nums > 10) return;
  console.log(nums);
  printOne(++nums);
}

// printOne(1);

//calculate the sum of n numbers with recursion
function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

// console.log("Sum of 10 numbers: " + sum(10));

//calculate the sum of all numbers of a array
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
console.log(arraySum2(array));

/**
 * some of all even numbers in a array
 */

function evenSum(arr, n) {
  if (n == 0) return arr[0] % 2 == 0 ? arr[0] : 0;
  return arr[n] % 2 == 0 ? arr[n] + evenSum(arr, n - 1) : evenSum(arr, n - 1);
}

console.log(evenSum(array, array.length - 1));
