function removeDuplicate(arr) {
  let uniqueIndex = 0;
  if (arr.length === 0) return 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[uniqueIndex]) {
      uniqueIndex = uniqueIndex + 1;
      arr[uniqueIndex] = arr[i];
    }
  }
  return uniqueIndex + 1;
}

// const arr = [1, 2, 3, 4, 4, 4, 15, 16, 16, 16, 20, 20, 21];
// const result = removeDuplicate(arr);
// console.log(result);

/**
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 */
function removeElement(arr, val) {
  let uniqueIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    //check if element not equals to the val then add to the unique index place otherwse move next
    if (arr[i] != val) {
      arr[uniqueIndex] = arr[i];
      uniqueIndex = uniqueIndex + 1;
    }
  }
  return uniqueIndex;
}
// const arr = [12, 23, 23, 1, 10, 15, 20, 23, 23, 23, 24];
// const result = removeElement(arr, 23);
// console.log(result);
