// https://practice.geeksforgeeks.org/problems/replace-os-with-xs/0
  
//Given a matrix of size NxM where every element is either ‘O’ or ‘X’, replace ‘O’ with ‘X’ if surrounded by ‘X’. A ‘O’ (or a set of ‘O’) is considered to be by surrounded by ‘X’ if there are ‘X’ at locations just below, just above, just left and just right of it.

// example: nmValues [1,5], matrix = "x o x x x x x"
const replaceOWithX = (nmValues, matrix) => {
    const n = nmValues[0];
    const m = nmValues[1];
    let firstIndex = 0;
    const nmIndexesObj = matrix.split(' ').reduce((obj, value, idx) => {
        const indexes = firstIndex + '' + (idx % m);
        if(((idx + 1) % m) === 0) {
            firstIndex++;
        }
        obj[indexes] = value;

        return obj;
    }, {});

    const nextValueX = (key, direction) => {
        if(direction === 'left') {
            let leftValue = parseInt(key.split('')[1]) - 1;
            while(leftValue >= 0) {
                let newKey = key.split('')[0] + leftValue
                if(nmIndexesObj[newKey] === 'X') {
                    return true;
                }
                leftValue--;
            }
            return false;
        }

        if(direction === 'right') {
            let rightValue = parseInt(key.split('')[1]) + 1;
            while(rightValue <= m) {
                let newKey = key.split('')[0] + rightValue
                if(nmIndexesObj[newKey] === 'X') {
                    return true;
                }
                rightValue++;
            }
            return false;
        }

        if(direction === 'up') {
            let up = parseInt(key.split('')[0]) - 1;
            while(up >= 0) {
                let newKey = up + key.split('')[1];
                if(nmIndexesObj[newKey] === 'X') {
                    return true;
                }
                up--;
            }
            return false;
        }

        if(direction === 'down') {
            let down = parseInt(key.split('')[0]) + 1;
            while(down <= n) {
                let newKey = down + key.split('')[1];
                if(nmIndexesObj[newKey] === 'X') {
                    return true;
                }
                down++;
            }
            return false;
        }
    }

    const nextValueIsXOrOWithNextValueX = (key) => {
        return nextValueX(key, 'left') && nextValueX(key, 'right') && nextValueX(key, 'up') && nextValueX(key, 'down');
    }

    for(let key in nmIndexesObj) {
        const value = nmIndexesObj[key];
        if(value === 'O') {
            if(nextValueIsXOrOWithNextValueX(key)) {
                nmIndexesObj[key] = 'X'
            }
        }
    }
    return nmIndexesObj;
}

// console.log(replaceOWithX([1, 5], 'X O X O X')); // => X O X O X
// console.log(replaceOWithX([3, 3], 'X X X X O X X X X')); // => X X X X X X X X X

// Find largest word in dictionary
// https://practice.geeksforgeeks.org/problems/find-largest-word-in-dictionary/0
// Giving a dictionary and a string ‘str’, your task is to find the longest string in dictionary of size x which can be formed by deleting some characters of the given ‘str’.

// Examples:

// Input : dict = {"ale", "apple", "monkey", "plea"}   
//         str = "abpcplea"  
// Output : apple

// Input  : dict = {"pintu", "geeksfor", "geeksgeeks", 
//                                         " forgeek"} 
//          str = "geeksforgeeks"
// Output : geeksgeeks

const largestWordInDictionary = (dictionary, str) => {
    // I assuming dictionary is array
    const dictionaryObject = dictionary.reduce((obj, key) => {
        obj[key] = true;
        return obj;
    }, {});
    let largestWord = '';

    const isGivenWordMatchesStringWithoutCoupleLetters = (currentWord) => {
        let i = 0;
        let j = 0;
        while(i < currentWord.length) {
            const currentCharacterOfWord = currentWord[i];
            if(j >= str.length) {
                return false;
            }
            while(j < str.length) {
                const currentCharacterOfString = str[j];
                if(currentCharacterOfString === currentCharacterOfWord) {
                    j++;
                    break;
                }
                j++;
            }
            i++;
        }
        return true;
    };

    for(var key in dictionaryObject) {
        if(isGivenWordMatchesStringWithoutCoupleLetters(key) && (key.length >= largestWord.length)) {
            largestWord = key;
        };
    };
    return largestWord;
}
// Time complexity would be O(n * str.length * currentWord.length) => I assume it is O(n)
// console.log(largestWordInDictionary(["pintu", "geeksfor", "geeksgeeks", "forgeek"], "geeksforgeeks"))

const pow = (x, n) => {
    if (n === 0) {
        return 1;
    }
    if (n > 0) {
        return x * pow(x, n - 1)
    } else {
        return (x * pow(x, n + 1))
    }
}

const realPow = (x, n) => {
    if (n < 0) {
        return 1 / pow(x, n)
    } else {
        return pow(x, n)
    }
}

var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

// Merge Sort O(n(logN))
function merge(leftArr, rightArr) { 
var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}
function mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
// console.log('This should be the sorted array!')
// console.log(mergesort(unsortedArr));
// ----------------------------------------------------------------
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
const binarySearch = (array, target, leftSideLength = 0) => {
    if (array.length < 1) {
        return -1;
    }
    const middleIdx = parseInt(array.length / 2);
    const arrayLeft = array.slice(0, middleIdx);
    const arrayRight = array.slice(middleIdx + 1);
    const newLeftSideLength = leftSideLength + arrayLeft.length + 1;
    const isAscOrder = (x, y, z) => {
        return x <= y <= z;
    }

    if (array[middleIdx] === target) {
        return leftSideLength + middleIdx;
    } else if (target < array[middleIdx] && !isAscOrder(array[middleIdx - 1], array[middleIdx], array[middleIdx + 1]) && (target > arrayLeft[0])) {
        return binarySearch(arrayLeft, target, leftSideLength)
    } else if (target < array[middleIdx] && !isAscOrder(array[middleIdx - 1], array[middleIdx], array[middleIdx + 1])) {
        return binarySearch(arrayRight, target, newLeftSideLength)
    } else if (target < array[middleIdx]) {
        return binarySearch(arrayLeft, target, leftSideLength);
    } else {
        return binarySearch(arrayRight, target, newLeftSideLength)
    }
}

// console.log(binarySearch([4,5,6,7,0,1,2], 0)) => 4. Time complexity O(n)
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


// Above is a 7 x 3 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

var factorial = function(n) {
    var result = 1;
  
    for (var i=n; i>0; i--) {
      result *= i;
    }
  
    return result;
  }
  
  var uniquePaths = function(m, n) {
      if (m == 1 || n == 1) {
          return 1;
      }
      else {
          m--;
          n--;
          
          return factorial(m+n) / (factorial(m) * factorial(n));
      }
  }

