let testArray = [12, -23, 0, -1, 145, 76, -90];

/**
 *
 * write a function that search for a element in array and return its index, If the element is not
 * found then return index
 */

function SearchIndex(arr, element) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === element) {
      return index;
    }
  }
  return -1;
}

// console.log(SearchIndex(testArray, 76));

/**
 * write a function that return the total numbers of negative elements in number
 */
function countNegativeElement(arr) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) count++;
  }
  return count;
}

console.log(countNegativeElement(testArray));
