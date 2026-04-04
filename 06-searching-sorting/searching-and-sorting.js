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

/**
 * -Bubble sort:- This algo is used for the sorting an array.
 * -its compare each element with his adjucent element. if swap is required then swap otherwise move to
 * the next iteration.
 * -After each iteration of the swaping one element move to his correnct position means one element 
 * bubble up to his own place in each iteration.
 * -Suppose we have total n numbers of element then i need to fix the n-1 elements to his own correct
 * places then last element would automatically places to his correct place. hence total number of 
 * iteration would be n-1 times (outer loop).
 * - for inner loop:- Since for each outer iteration if one element move to his correct places then i
 * dont need to check the sorted element in  each iteration . so number of iteratio of inner loop will
 * be decrease by one in each outer loop iteration so inner loop run for n-1-i times(i is loop index in o
 * outer loop).
 * 
 *  
 */
function bubble_sort(arr){
  let n = arr.length;
  for(let  i = 0  ; i < n-1 ; i++){
    for(let j = 0 ;  j < n-1-i ; j++){
      if(arr[j] > arr[j+1]){
        [arr[j] , arr[j+1]] =[arr[j+1] , arr[j]];
      }
    }
  }
  return arr;
};
// console.log(bubble_sort([1,12,5,7]));

/**
 * one Improvements i need to do in this algo, suppose if any point of time our array is sortted 
 * then i should not run algo and break at the point;
 */
function imp_bubbleSort(arr){
  let n = arr.length;
  for(let i = 0  ; i < n-1 ; i++){
    let isSwapped = false;
    for(let j = 0 ; j< n-1-i ; j++){
      if(arr[j] > arr[j+1]){
        [arr[j] , arr[j+1] ] = [arr[j+1] , arr[j]]
        isSwapped = true;
      }
    }
    if(!isSwapped) break;
  }
  return arr;

}
console.log(imp_bubbleSort([1,12,5,7]));
