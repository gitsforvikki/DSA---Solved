/**
 * Linear search - Iterating elements of array one by one and compare with target, if match then
 * return the index otherwise at the end of loop return -1;
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([1,2,34,5,23,10,90] , 2))

/**
 * Binary Search
 * 1) its only work on the sorted array
 * 2)devide the array and seach in the sub array
 * 3) for this first we have to maintain two pointer first who point the starting of the arraya and second who
 *  point the end of the array and keep updating according to the condition
 * 4)find out the middle element by
 * 5) check it middle element is equal to the target then sumply return the middle index
 * 6) if target is greater than the middle element the select right sub array and update the left point like
 *  left = middle + 1;
 * 7) if target element is lass then the middle element the select the left sub array and update the right pointer like
 *  right = middle -1;
 *
 * 8) this will keep iterating until right >= left , and for this i will use the while loop;
 * 9) if not found the return -1'
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] == target) {
      return middle;
    } else if (target > middle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 34, 5, 23, 10, 90], 5));
