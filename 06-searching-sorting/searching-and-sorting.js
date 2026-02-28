/**
 * Linear search - Iterating elements of array one by one and compare with target, if match then
 * return the index otherwise at the end of loop return -1;
 */
function linearSearch (arr , target){
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] ==  target){
            return i;
        }
    }
    return -1;
}

// console.log(linearSearch([1,2,34,5,23,10,90] , 2))