//Buble Sort
var arrayForBubbleSort = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const bubbleSort = (arr) => {
    let swapped = true;
    while(swapped) {
        swapped = false;
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }
    return arr;
};
// console.log(bubbleSort(arrayForBubbleSort));
// Time complexity:
// Best O(n)
// Average/Worst O(n2)/O(n2)
/////////////////////////////////////////////////////////////////////////
// Insertion Sort
// array to sort
var arrayForInsertion = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}
// Time complexity	 	 
// Best	Average	Worst
// O(n)	O(n^2)	O(n^2)
// console.log(insertionSort(arrayForInsertion)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
///////////////////////////////////////////////////////////
// bottom-up implementation
function mergeSortBottomUp(array) {
    var step = 1;
    while (step < array.length) {
      var left = 0;
      while (left + step < array.length) {
        mergeBottomUp(array, left, step);
        left += step * 2;
      }
      step *= 2;
    }
    return array;
  }
  function mergeBottomUp(array, left, step) {
    var right = left + step;
    var end = Math.min(left + step * 2 - 1, array.length - 1);
    var leftMoving = left;
    var rightMoving = right;
    var temp = [];
  
    for (var i = left; i <= end; i++) {
      if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
          leftMoving < right) {
        temp[i] = array[leftMoving];
        leftMoving++;
      } else {
        temp[i] = array[rightMoving];
        rightMoving++;
      }
    }
  
    for (var j = left; j <= end; j++) {
      array[j] = temp[j];
    }
  }
  
//   console.log(mergeSortBottomUp(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
///////////////
// binary search iteratively
function binarySearch(target, nums) {

    // See if target appears in nums
  
    // We think of floorIndex and ceilingIndex as "walls" around
    // the possible positions of our target, so by -1 below we mean
    // to start our wall "to the left" of the 0th index
    // (we *don't* mean "the last index")
    let floorIndex = -1;
    let ceilingIndex = nums.length;
  
    // If there isn't at least 1 index between floor and ceiling,
    // we've run out of guesses and the number must not be present
    while (floorIndex + 1 < ceilingIndex) {
  
      // Find the index ~halfway between the floor and ceiling
      // We have to round down, to avoid getting a "half index"
      const distance = ceilingIndex - floorIndex;
      const halfDistance = Math.floor(distance / 2);
      const guessIndex = floorIndex + halfDistance;
  
      const guessValue = nums[guessIndex];
  
      if (guessValue === target) {
        return true;
      }
  
      if (guessValue > target) {
  
        // Target is to the left, so move ceiling to the left
        ceilingIndex = guessIndex;
      } else {
  
        // Target is to the right, so move floor to the right
        floorIndex = guessIndex;
      }
    }
  
    return false;
  }
  //////////////////////////////////
//   counting sort
function countingSort(theArray, maxValue) {

    // Array of 0's at indices 0...maxValue
    const numCounts = new Array(maxValue + 1).fill(0);
  
    // Populate numCounts
    theArray.forEach(num => {
      numCounts[num] += 1;
    });

    let sortedArray = [];
    let startIdx = 0;
    for(let i = 1; i <= numCounts.length; i++) {
        if (numCounts[i]) {
            let j = 1;
            while (j <= numCounts[i]) {
                sortedArray[startIdx] = i;
                j++;
                startIdx++;
            }
        }
    }
  
    return sortedArray;
  }

//   console.log(countingSort([4, 1, 2, 8, 7, 9, 3, 3, 3], 9))