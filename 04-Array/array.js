/**
 * Remove duplicate elements from a sorted non decreasing array in-place,
 * and return the number of the unique elements in the array after duplicates have been removed.
 */

const removeDuplicates = (num) => {
  let uniqueIndex = 0;
  for (let i = 1; i < num.length; i++) {
    if (num[i] > num[uniqueIndex]) {
      uniqueIndex = uniqueIndex + 1;
      num[uniqueIndex] = num[i];
    }
  }
  return uniqueIndex + 1;
};
const arr = [1, 2, 4, 4, 4, 8, 8, 10, 16, 20, 20];
let result = removeDuplicates(arr);
console.log(result);
