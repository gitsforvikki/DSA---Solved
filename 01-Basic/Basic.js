let testArray = [12, -23, 0, -1, 145, 76, -90 , 190];

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

// console.log(countNegativeElement(testArray));

/**
 *
 * write function to find out largest number in array
 */

function largestElement(arr) {
  let largest = -Infinity;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      largest = arr[index];
    }
  }
  return largest;
}

// console.log(largestElement(testArray));

/**
 * write function find second largest number in the array element
 */
function secondLargestNumber(arr) {
  if (arr.length < 2) return "Not possible";
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      secondLargest = largest;
      largest = arr[index];
    } else if (arr[index] < largest && arr[index] > secondLargest) {
      secondLargest = arr[index];
    }
  }
  if (secondLargest === -Infinity) return "Not Possible";
  return secondLargest;
}

// console.log(secondLargestNumber(testArray));
