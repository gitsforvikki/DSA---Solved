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

/**
 * reverse areay of string in-place with o(1) space complexity
 */

function swapStrngArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
// const stringArr = ["v", "i", "k", "l", "i"];

// const result = swapStrngArray(stringArr);
// console.log(result);

/**
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in 
 * the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 */

//Brute-force 
// function getMaxProfit(arr) {
//   let maxProfit = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         temp = arr[j] - arr[i];
//         if (temp > maxProfit) {
//           maxProfit = temp;
//         }
//       }
//     }
//   }
//   return maxProfit;
// }

// with O(n) time
function getMaxProfit(arr) {
  let maxProfit = 0;
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[x] > arr[i]) {
      x = i;
    } else {
      temp = arr[i] - arr[x];
      if (temp > maxProfit) {
        maxProfit = temp;
      }
    }
  }
  return maxProfit;
}

// const stock = [1, 10, 5, 4, 6, 20];
// const result = getMaxProfit(stock);
// console.log(result);
