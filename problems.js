// // https://practice.geeksforgeeks.org/problems/replace-os-with-xs/0
  
// //Given a matrix of size NxM where every element is either ‘O’ or ‘X’, replace ‘O’ with ‘X’ if surrounded by ‘X’. A ‘O’ (or a set of ‘O’) is considered to be by surrounded by ‘X’ if there are ‘X’ at locations just below, just above, just left and just right of it.

// // example: nmValues [1,5], matrix = "x o x x x x x"
// const replaceOWithX = (nmValues, matrix) => {
//     const n = nmValues[0];
//     const m = nmValues[1];
//     let firstIndex = 0;
//     const nmIndexesObj = matrix.split(' ').reduce((obj, value, idx) => {
//         const indexes = firstIndex + '' + (idx % m);
//         if(((idx + 1) % m) === 0) {
//             firstIndex++;
//         }
//         obj[indexes] = value;

//         return obj;
//     }, {});

//     const nextValueX = (key, direction) => {
//         if(direction === 'left') {
//             let leftValue = parseInt(key.split('')[1]) - 1;
//             while(leftValue >= 0) {
//                 let newKey = key.split('')[0] + leftValue
//                 if(nmIndexesObj[newKey] === 'X') {
//                     return true;
//                 }
//                 leftValue--;
//             }
//             return false;
//         }

//         if(direction === 'right') {
//             let rightValue = parseInt(key.split('')[1]) + 1;
//             while(rightValue <= m) {
//                 let newKey = key.split('')[0] + rightValue
//                 if(nmIndexesObj[newKey] === 'X') {
//                     return true;
//                 }
//                 rightValue++;
//             }
//             return false;
//         }

//         if(direction === 'up') {
//             let up = parseInt(key.split('')[0]) - 1;
//             while(up >= 0) {
//                 let newKey = up + key.split('')[1];
//                 if(nmIndexesObj[newKey] === 'X') {
//                     return true;
//                 }
//                 up--;
//             }
//             return false;
//         }

//         if(direction === 'down') {
//             let down = parseInt(key.split('')[0]) + 1;
//             while(down <= n) {
//                 let newKey = down + key.split('')[1];
//                 if(nmIndexesObj[newKey] === 'X') {
//                     return true;
//                 }
//                 down++;
//             }
//             return false;
//         }
//     }

//     const nextValueIsXOrOWithNextValueX = (key) => {
//         return nextValueX(key, 'left') && nextValueX(key, 'right') && nextValueX(key, 'up') && nextValueX(key, 'down');
//     }

//     for(let key in nmIndexesObj) {
//         const value = nmIndexesObj[key];
//         if(value === 'O') {
//             if(nextValueIsXOrOWithNextValueX(key)) {
//                 nmIndexesObj[key] = 'X'
//             }
//         }
//     }
//     return nmIndexesObj;
// }

// // console.log(replaceOWithX([1, 5], 'X O X O X')); // => X O X O X
// // console.log(replaceOWithX([3, 3], 'X X X X O X X X X')); // => X X X X X X X X X

// // Find largest word in dictionary
// // https://practice.geeksforgeeks.org/problems/find-largest-word-in-dictionary/0
// // Giving a dictionary and a string ‘str’, your task is to find the longest string in dictionary of size x which can be formed by deleting some characters of the given ‘str’.

// // Examples:

// // Input : dict = {"ale", "apple", "monkey", "plea"}   
// //         str = "abpcplea"  
// // Output : apple

// // Input  : dict = {"pintu", "geeksfor", "geeksgeeks", 
// //                                         " forgeek"} 
// //          str = "geeksforgeeks"
// // Output : geeksgeeks

// const largestWordInDictionary = (dictionary, str) => {
//     // I assuming dictionary is array
//     const dictionaryObject = dictionary.reduce((obj, key) => {
//         obj[key] = true;
//         return obj;
//     }, {});
//     let largestWord = '';

//     const isGivenWordMatchesStringWithoutCoupleLetters = (currentWord) => {
//         let i = 0;
//         let j = 0;
//         while(i < currentWord.length) {
//             const currentCharacterOfWord = currentWord[i];
//             if(j >= str.length) {
//                 return false;
//             }
//             while(j < str.length) {
//                 const currentCharacterOfString = str[j];
//                 if(currentCharacterOfString === currentCharacterOfWord) {
//                     j++;
//                     break;
//                 }
//                 j++;
//             }
//             i++;
//         }
//         return true;
//     };

//     for(var key in dictionaryObject) {
//         if(isGivenWordMatchesStringWithoutCoupleLetters(key) && (key.length >= largestWord.length)) {
//             largestWord = key;
//         };
//     };
//     return largestWord;
// }
// // Time complexity would be O(n * str.length * currentWord.length) => I assume it is O(n)
// // console.log(largestWordInDictionary(["pintu", "geeksfor", "geeksgeeks", "forgeek"], "geeksforgeeks"))

// const pow = (x, n) => {
//     if (n === 0) {
//         return 1;
//     }
//     if (n > 0) {
//         return x * pow(x, n - 1)
//     } else {
//         return (x * pow(x, n + 1))
//     }
// }

// const realPow = (x, n) => {
//     if (n < 0) {
//         return 1 / pow(x, n)
//     } else {
//         return pow(x, n)
//     }
// }

// var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

// // Merge Sort O(n(logN))
// function merge(leftArr, rightArr) { 
// var sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr[0]);
//       leftArr = leftArr.slice(1)
//    } else {
//       sortedArr.push(rightArr[0]);
//       rightArr = rightArr.slice(1)
//      }
//    }
//   while (leftArr.length)
//     sortedArr.push(leftArr.shift());
//   while (rightArr.length)
//     sortedArr.push(rightArr.shift());
//   return sortedArr;
// }
// function mergesort(arr) {
//   if (arr.length < 2) {
//     return arr; }
//   else {
//     var midpoint = parseInt(arr.length / 2);
//     var leftArr   = arr.slice(0, midpoint);
//     var rightArr  = arr.slice(midpoint, arr.length);
//     return merge(mergesort(leftArr), mergesort(rightArr));
//   }
// }
// // console.log('This should be the sorted array!')
// // console.log(mergesort(unsortedArr));
// // ----------------------------------------------------------------
// // Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// // (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// // You are given a target value to search. If found in the array return its index, otherwise return -1.

// // You may assume no duplicate exists in the array.

// // Your algorithm's runtime complexity must be in the order of O(log n).

// // Example 1:

// // Input: nums = [4,5,6,7,0,1,2], target = 0
// // Output: 4
// // Example 2:

// // Input: nums = [4,5,6,7,0,1,2], target = 3
// // Output: -1
// const binarySearch = (array, target, leftSideLength = 0) => {
//     if (array.length < 1) {
//         return -1;
//     }
//     const middleIdx = parseInt(array.length / 2);
//     const arrayLeft = array.slice(0, middleIdx);
//     const arrayRight = array.slice(middleIdx + 1);
//     const newLeftSideLength = leftSideLength + arrayLeft.length + 1;
//     const isAscOrder = (x, y, z) => {
//         return x <= y <= z;
//     }

//     if (array[middleIdx] === target) {
//         return leftSideLength + middleIdx;
//     } else if (target < array[middleIdx] && !isAscOrder(array[middleIdx - 1], array[middleIdx], array[middleIdx + 1]) && (target > arrayLeft[0])) {
//         return binarySearch(arrayLeft, target, leftSideLength)
//     } else if (target < array[middleIdx] && !isAscOrder(array[middleIdx - 1], array[middleIdx], array[middleIdx + 1])) {
//         return binarySearch(arrayRight, target, newLeftSideLength)
//     } else if (target < array[middleIdx]) {
//         return binarySearch(arrayLeft, target, leftSideLength);
//     } else {
//         return binarySearch(arrayRight, target, newLeftSideLength)
//     }
// }

// // console.log(binarySearch([4,5,6,7,0,1,2], 0)) => 4. Time complexity O(n)
// // A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// // The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// // How many possible unique paths are there?


// // Above is a 7 x 3 grid. How many possible unique paths are there?

// // Note: m and n will be at most 100.

// // Example 1:

// // Input: m = 3, n = 2
// // Output: 3
// // Explanation:
// // From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// // 1. Right -> Right -> Down
// // 2. Right -> Down -> Right
// // 3. Down -> Right -> Right

// var factorial = function(n) {
//     var result = 1;
  
//     for (var i=n; i>0; i--) {
//       result *= i;
//     }
  
//     return result;
//   }
  
//   var uniquePaths = function(m, n) {
//       if (m == 1 || n == 1) {
//           return 1;
//       }
//       else {
//           m--;
//           n--;
          
//           return factorial(m+n) / (factorial(m) * factorial(n));
//       }
//   }
// ////////////////////////////////////////

// const maxDuffelBagValue = (arrOfCakes, capacity, total = 0) => {
//     let biggest = 0;
//     let modulusValue = 0;
//     arrOfCakes.forEach((cakeTypeObj) => {
//         if (cakeTypeObj.weight <= capacity) {
//             const totalValue = Math.floor(capacity / cakeTypeObj.weight) * cakeTypeObj.value;
//             if (totalValue > biggest) {
//                 biggest = totalValue;
//                 modulusValue = capacity % cakeTypeObj.weight;
//             }
//         }
//     })

//     return modulusValue === 0 ? biggest + total : maxDuffelBagValue(arrOfCakes, modulusValue, biggest);
// }

// const cakeTypes = [
//     { weight: 0, value: 0 },
//     { weight: 3, value: 90 },
//     { weight: 2, value: 15 },
//   ];
  
// const capacity = 20;

// // console.log(maxDuffelBagValue(cakeTypes, 20));
// ///////////////////////////////////////////////
// // We start with a function for getting the largest value. The largest value is simply the "rightmost" one, so we can get it in one walk down the tree by traversing rightward until we don't have a right child anymore:
// // With this in mind, we can also find the second largest in one walk down the tree. At each step, we have a few cases:

// // If we have a left subtree but not a right subtree, then the current node is the largest overall (the "rightmost") node. The second largest element must be the largest element in the left subtree. We use our findLargest() function above to find the largest in that left subtree!
// // If we have a right child, but that right child node doesn't have any children, then the right child must be the largest element and our current node must be the second largest element!
// // Else, we have a right subtree with more than one element, so the largest and second largest are somewhere in that subtree. So we step right.
//   function findLargest(rootNode) {
//   let current = rootNode;
//   while (current) {
//     if (!current.right) return current.value;
//     current = current.right;
//   }
// }

// function findSecondLargest(rootNode) {
//   if (!rootNode || (!rootNode.left && !rootNode.right)) {
//     throw new Error('Tree must have at least 2 nodes');
//   }

//   let current = rootNode;

//   while (current) {

//     // Case: current is largest and has a left subtree
//     // 2nd largest is the largest in that subtree
//     if (current.left && !current.right) {
//       return findLargest(current.left);
//     }

//     // Case: current is parent of largest, and largest has no children,
//     // so current is 2nd largest
//     if (
//       current.right
//       && !current.right.left
//       && !current.right.right
//     ) {
//       return current.value;
//     }

//     current = current.right;
//   }
// }

// Complexity
// We're doing one walk down our BST, which means O(h)O(h) time, where hh is the height of the tree (again, that's O(\lg{n})O(lgn) if the tree is balanced, O(n)O(n) otherwise). O(1)O(1) space.

////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Make change
// https://www.interviewcake.com/question/javascript/coin?course=fc1&section=dynamic-programming-recursion
const maxDuffelBagValue2 = (array, n) => {
    //creating an array of max capacities
    const arrayOfMaxCapacities = new Array(n + 1).fill(0);

    for(let i = 0; i < arrayOfMaxCapacities.length; i++) {
        let currentMaxCapacity = 0;
        // let currentCapacity = arrayOfMaxCapacities[i];

        for(let j = 0; j < array.length; j++) {
            let currentCakeType = array[j];

            if (currentCakeType.weight === 0 && currentCakeType.value !== 0) {
                throw new Error('Congrats! You can still an Infinity of cakes')
            }

            if (currentCakeType.weight <= i) {
                currentMaxCapacityUsingCake = currentCakeType.value + arrayOfMaxCapacities[i - currentCakeType.weight]

                currentMaxCapacity = Math.max(currentMaxCapacityUsingCake, currentMaxCapacity)
            }
        }
        arrayOfMaxCapacities[i] = currentMaxCapacity
    }
    return arrayOfMaxCapacities[n]
}

const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
  ];
  
  const capacity = 20;

// console.log(maxDuffelBagValue2(cakeTypes, capacity))

///////////////////////
// median of two sorted arrays with the same length
// it needs to be tested, cause it is not working properly, but idea is right :)
// https://www.youtube.com/watch?v=LPFhl65R7ww
const findMedian = (arr1, arr2, startIdx = 0, endIdx) => {
    const smallestArr = findSmallestArr(arr1, arr2);
    const biggestArr = findBiggestArr(arr1, arr2);

    let start = startIdx;
    let end = endIdx || smallestArr.length - 1;
    // partition of SmallestArr
    let partitionX = Math.floor((start + end) / 2)
    //partition of biggestArr
    let partitionY = Math.floor((smallestArr.length + biggestArr.length + 1) / 2) - partitionX;

    let leftElementPartitionX = smallestArr[partitionX - 1]
    let rightElementPartitionX = smallestArr[partitionX]
    let leftElementPartitionY = biggestArr[partitionY - 1]
    let rightElementPartitionY = biggestArr[partitionY]

    if ((leftElementPartitionX <= rightElementPartitionY) && (leftElementPartitionY <= rightElementPartitionX)) {
        if ((smallestArr.length + biggestArr.length) % 2 === 0) {
            const result = (Math.max(smallestArr[partitionX - 1], biggestArr[partitionY - 1]) + Math.min(smallestArr[partitionX], biggestArr[partitionY])) / 2
            return result;
        } else {
            return Math.max(smallestArr[partitionX - 1], biggestArr[partitionY - 1])
        }
        //if MaxLeftX > MinRightY -> to to the left side
    } else if (rightElementPartitionX > leftElementPartitionY) {
        return findMedian(arr1, arr2, 0, partitionX);
    } else {
        return findMedian(arr1, arr2, partitionX, smallestArr.length);
    }
}

const findSmallestArr = (arr1, arr2) => {
    if (arr1.length < arr2.length) {
        return arr1
    } else {
        return arr2;
    }
}

const findBiggestArr = (arr1, arr2) => {
    if (arr1.length > arr2.length) {
        return arr1
    } else {
        return arr2;
    }
}

// const X = [0, 2, 2]
// const Y = [1, 3, 4, 6, 55]
// console.log(findMedian(X, Y))
///////////////////////////////////////////
const trap = height => {
    const n = height.length;
  
    const left = [];
    const right = [];
  
    let leftMax = 0;
    let rightMax = 0;
  
    for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
      // Scan from left
      left[i] = leftMax;
      leftMax = Math.max(leftMax, height[i]);
  
      // Scan from right
      right[j] = rightMax;
      rightMax = Math.max(rightMax, height[j]);
    }
  
    let total = 0;
    for (let i = 0; i < n; i++) {
      let water = Math.min(left[i], right[i]) - height[i];
      total += water > 0 ? water : 0;
    }
  
    return total;
  };

  const water = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
//   console.log(trap(water))
///////////////////////////////////////////////////////////////////////////
'use strict'

class NodeLRU {  
  constructor(key, value) {
    if (typeof key !== 'undefined' || typeof key !== null) {
      this.key = key
    }
    if (typeof value !== 'undefined' || typeof value !== null) {
      this.value = value
    }
    this.next = null
    this.prev = null
  }
}


class Cache {  
  constructor(limit = 100) {
    if (typeof limit === 'number') {
      this._limit = limit
    }
    this._size = 0
    this._map = {}
    this._head = null
    this._tail = null
  }

  setHead(node) {
    node.next = this._head
    node.prev = null
    // if head exists
    if (this._head !== null) {
      this._head.prev = node
    }
    this._head = node
    // if tail does not exist
    if (this._tail === null) {
      this._tail = node
    }
    this._size++
    this._map[node.key] = node
  }

  // return an item from the cache
  get(key) {
    if (this._map[key]) {
      const value = this._map[key].value
      const node = new NodeLRU(key, value)
      this.remove(key)
      this.setHead(node)
      return value
    }
    return -1;
  }

  // add an item to the cache. overwrite if already exists
  set(key, value) {
    const node = new NodeLRU(key, value)
    if (this._map[key]) {
      this.remove(key)
    } else {
      // if cache is full
      if (this._size >= this._limit) {
        delete this._map[this._tail]
        this._size--
        this._tail = this._tail.prev
        this._tail.next = null
      }
    }
    this.setHead(node)
  }

  // remove an item from the cache
  remove(key) {
    if(this._map[key]) {
      const node = this._map[key]
      // update head and tail
      if (node.prev !== null) {
        node.prev.next = node.next
      } else {
        this._head = node.next
      }
      if (node.next !== null) {
        node.next.prev = node.prev
      } else {
        this._tail = node.prev
      }
      // actually do the removal stuff
      delete this._map[key]
      this._size--
    }
  }

  // reset the cache to an empty and fresh state
  clear(limit = 10) {
    if (typeof limit === 'number') this._limit = limit
    this._size = 0
    this._map = {}
    this._head = null
    this._tail = null
  }

  // Traverse each cached item and call a function
  // callback is passed [node element, element number, cache instance] 
  forEach(callback) {
    let node = this._head
    let i = 0
    while (node) {
      callback.apply(this, [node, i, this])
      i++
      node = node.next
    }
  }

  // return a JSON represenation of the cache
  toJSON() {
    let json = []
    let node = this._head
    while (node) {
      let data = {
        key: node.key,
        value: node.value
      }
      json.push(data)
      node = node.next
    }
    return json
  }
}

// const cache = new Cache(2);
// cache.set(1, 3)
// cache.set(2, 4)
// console.log(cache)
////////////////////////////
"use strict";

var grid = [
        [0,0,8,4,0,3,5,0,6],
        [0,0,3,1,0,2,0,0,4],
        [0,4,5,7,0,0,0,9,0],
        [6,9,0,0,0,5,0,0,7],
        [0,8,0,0,0,0,0,5,0],
        [4,0,0,3,0,0,0,1,8],
        [0,7,0,0,0,6,2,4,0],
        [1,0,0,5,0,7,8,0,0],
        [8,0,6,9,0,1,3,0,0]
    ];

// recursive algo
function solveSudoku(grid, row, col) {
    var cell = findUnassignedLocation(grid, row, col);
    row = cell[0];
    col = cell[1];

    // base case: if no empty cell  
    if (row == -1) {
        console.log("solved");
        return true;
    }

    for (var num = 1; num <= 9; num++) {

        if ( noConflicts(grid, row, col, num) ) {   
            grid[row][col] = num;

            if ( solveSudoku(grid, row, col) ) {                
                return true;
            }

                    // mark cell as empty (with 0)    
            grid[row][col] = 0;
        }
    }

    // trigger back tracking
    return false;
}


function findUnassignedLocation(grid, row, col) {
    var done = false;
    var res = [-1, -1];

    while (!done) {
        if (row == 9) {
            done = true;
        }
        else {
            if (grid[row][col] == 0) {
                res[0] = row;
                res[1] = col;
                done = true;
            }
            else {
                if (col < 8) {
                    col++;
                }
                else {
                    row++;
                    col = 0;
                }
            }
        }
    }

    return res;
}

function noConflicts(grid, row, col, num) {
    return isRowOk(grid, row, num) && isColOk(grid, col, num) && isBoxOk(grid, row, col, num);
}

function isRowOk(grid, row, num) {
    for (var col = 0; col < 9; col++)
        if (grid[row][col] == num)
            return false;

    return true;
}
function isColOk(grid, col, num) {
    for (var row = 0; row < 9; row++)
    if (grid[row][col] == num)
        return false;

    return true;    
}
function isBoxOk(grid, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (grid[row + r][col + c] == num)
                return false;

    return true;
}

function printGrid(grid) {
    var res = "";

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            res += grid[i][j];
        }
        res += "\n";
    }
    // console.log(res);
}

//////////////////////////////////////////////
// findDuplicates in two sortedArrays
// 1) assumption: one array is much smaller than the other one. I am iterating through small one and using binary search to find it in another one
//  Time complexity Log(n), because m is much smaller than another one. Space would be linear time, cause worst case scenario -> result array m-size, but it is so small
// 2) assumption: two same size arrays. Space complexity should be O(min(n, m)) and NO extra obj. 
// I can use two pointers i and j. iterate through one array and increment i and j appropriately.
// Example of assumption 2) 
// arr1, arr2
// result = []
// i = 0
// j = 0
// while ( i < arr1.length) {
//     let currentArr1Element = arr1[i];
//     let iterateThroughJ = true
//     while(iterateThroughJ) {
//         let currentArr2Element = arr2[j]
//         if (currentArr2Element === currentArr1Element) {
//             result.push(currentArr1Element)
//             j++;
//             iterateThroughJ = false
//         }
//         j++;
//     }
//     return result;
// }
//////////////////////////
// next closest time 
// Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

// You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

// Example 1:

// Input: "19:34"
// Output: "19:39"
// Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.
// Example 2:

// Input: "23:59"
// Output: "22:22"
// Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the retur
// This approach here is trying to find next digit for each postion in "HH:MM" from right to left. If the next digit is greater than current digit, return directly and keep other digits unchanged.
// Here is the steps: (e.g. "17:38")

// Retrieve all four digits from given string and sort them in asscending order, "17:38" -> digits[] {'1', '3', '7', '8'}

// Apply findNext() from the right most digit to left most digit, try to find next greater digit from digits[] (if exist) which is suitable for current position, otherwise return the minimum digit (digits[0]):

// "HH:M_": there is no upperLimit for this position (0-9). Just pick the next different digit in the sequence. In the example above, '8' is already the greatest one, so we change it into the smallest one (digits[0] i.e. '1') and move to next step: "17:38" -> "17:31"

// "HH:_M": the upperLimit is '5' (00~59). The next different digit for '3' is '7', which is greater than '5', so we should omit it and try next. Similarly, '8' is beyond the limit, so we should choose next, i.e. '1': "17:38" -> "17:11"

// "H_:MM": the upperLimit depends on result[0]. If result[0] == '2', then it should be no more than '3'; else no upperLimit (0-9). Here we have result[0] = '1', so we could choose any digit we want. The next digit for '7' is '8', so we change it and return the result directly. "17:38" -> "18:11"

// "_H:MM": the upperLimit is '2' (00~23). e.g. "03:33" -> "00:00"
const findClosestTime = (strInput) => {
    const str = strInput.split(':').join('')
    const sortedStr = str.split('').sort((a, b) => a > b);
    let result = []
    for(let i = str.length - 1; i >= 0; i--) {
        if (i === str.length - 1) {
            // console.log(str[i])
            result.unshift(findNext(9, str[i], sortedStr))
            // console.log(str[i])
        } else if (i === str.length - 2) {
            result.unshift(findNext(5, str[i], sortedStr))
        } else if (i === str.length - 3) {
            const limit = str[0] === 2 ? 3 : 9
            result.unshift(findNext(limit, str[i], sortedStr))
        } else {
            result.unshift(findNext(2, str[i], sortedStr))
        }
    }
    return result.join('');
}

const findNext = (limit, currentElement, sortedStr) => {
    for(let i = sortedStr.length - 1; i >= 0; i--) {
        console.log(sortedStr[i], 'sortedStr[i]')
        console.log(currentElement, 'currentElement')
        console.log(limit, 'limit')
        if (sortedStr[i] <= limit && sortedStr[i] > currentElement) {
            console.log('hey')
            return sortedStr[i];
        }
    }
    return sortedStr[0];
}

console.log(findClosestTime("19:34"))