// isValid
function Stack() {
    this.storage = {};
    this.size = 1;
}

Stack.prototype.push = function(value) {
    this.storage[this.size] = value;
    this.size++;
}

Stack.prototype.pop = function() {
    if (this.size) {
        const deletedElement = this.storage[this.size - 1];
        delete this.storage[this.size - 1];
        this.size--;

        return deletedElement;
    }
}

const isValid = (str) => {
    const openers = { '{': true, '(': true, '[': true };
    const closers = { '}': '{', ')': '(', ']': '[' };
    const stack = new Stack();

    for(let i = 0; i < str.length; i++) {
        const el = str[i];
        if (openers[el]) {
            stack.push(el);
        } else {
            const poppedElement = stack.pop();
            // console.log(closers[el] !== poppedElement)
            if (closers[el] !== poppedElement) {
                return false;
            }
        }
    };
    // console.log(stack)
    return stack.size === 1;
}

const a = "{[]()}" //should return true
const b = "{[(])}" //should return false
const c = "{[}" //should return false
/////////////////////////////////////////
// Balance tree 'superbalanced'
class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }

  function isBalanced(treeRoot) {

    // A tree with no nodes is superbalanced, since there are no leaves!
    if (!treeRoot) {
      return true;
    }
  
    const depths = []; // We short-circuit as soon as we find more than 2
  
    // Nodes will store pairs of a node and the node's depth
    const nodes = [];
    nodes.push([treeRoot, 0]);
  
    while (nodes.length) {
  
      // Pop a node and its depth from the top of our stack
      const nodePair = nodes.pop();
      const node = nodePair[0];
      const depth = nodePair[1];
  
      if (!node.left && !node.right) {
  
        // Сase: we found a leaf
        // We only care if it's a new depth
        if (depths.indexOf(depth) < 0) {
          depths.push(depth);
  
          // Two ways we might now have an unbalanced tree:
          //   1) More than 2 different leaf depths
          //   2) 2 leaf depths that are more than 1 apart
          if (
            (depths.length > 2)
            || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
          ) {
            return false;
          }
        }
      } else {
  
        // Case: this isn't a leaf - keep stepping down
        if (node.left) {
          nodes.push([node.left, depth + 1]);
        }
        if (node.right) {
          nodes.push([node.right, depth + 1]);
        }
      }
    }
  
    return true;
  }
// Complexity
// O(n) time and O(n) space.
  /////////////////////////////////////////

// calendar merge and merge sort
const calendarMerge = (arr) => {
    const sortedCalendar = arr.sort((a, b) => {
        return a.startTime - b.startTime;
    });
    const result = [sortedCalendar[0]];

    sortedCalendar.slice(1).forEach((oneTimeSlot) => {
        const lastElement = result[result.length - 1];
        if (lastElement.endTime >= oneTimeSlot.startTime) {
            let newElement;
            if (lastElement.endTime < oneTimeSlot.endTime) {
                newElement = {
                    startTime: lastElement.startTime,
                    endTime: oneTimeSlot.endTime
                }
            } else {
                newElement = {
                    startTime: lastElement.startTime,
                    endTime: lastElement.endTime
                }
            }
            result[result.length - 1] = newElement;
        } else {
            result.push(oneTimeSlot);
        }
    });

    return result;
}

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const midIdx = Math.floor(arr.length / 2);
    const left = (arr.slice(0, midIdx));
    const right = (arr.slice(midIdx));

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());

    return result;
}
////////////////////////////////////////////
// making ccoin hange
function changePossibilitiesBottomUp(amount, denominations) {

    // Initialize an array of zeros with indices up to amount
    const waysOfDoingNcents = new Array(amount + 1).fill(0);
    waysOfDoingNcents[0] = 1;
  
    denominations.forEach(coin => {
      for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
        const higherAmountRemainder = higherAmount - coin;
        waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
      }
    });
  
    return waysOfDoingNcents[amount];
  }
  /////////////////////////////////////////////
  // overlapping two rectangles problem
function findRangeOverlap(point1, length1, point2, length2) {

    // Find the highest start point and lowest end point.
    // The highest ("rightmost" or "upmost") start point is
    // the start point of the overlap.
    // The lowest end point is the end point of the overlap.
    const highestStartPoint = Math.max(point1, point2);
    const lowestEndPoint = Math.min(point1 + length1, point2 + length2);
  
    // Return null overlap if there is no overlap
    if (highestStartPoint >= lowestEndPoint) {
      return { startPoint: null, overlapLength: null };
    }
  
    // Compute the overlap length
    const overlapLength = lowestEndPoint - highestStartPoint;
  
    return { startPoint: highestStartPoint, overlapLength: overlapLength };
  }
  
  function findRectangularOverlap(rect1, rect2) {
  
    // Get the x and y overlap points and lengths
    const xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    const yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);
  
    // Return null rectangle if there is no overlap
    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
      return {
        leftX: 0,
        bottomY: 0,
        width: 0,
        height: 0,
      };
    }
  
    return {
      leftX: xOverlap.startPoint,
      bottomY: yOverlap.startPoint,
      width: xOverlap.overlapLength,
      height: yOverlap.overlapLength,
    };
  }
/////////////////////////////////////
//highest productOf3
function highestProductOf3(arrayOfInts) {
    if (arrayOfInts.length < 3) {
      throw new Error('Less than 3 items!');
    }
  
    // We're going to start at the 3rd item (at index 2)
    // So pre-populate highests and lowests based on the first 2 items
    // We could also start these as null and check below if they're set
    // but this is arguably cleaner
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);
  
    let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    let lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];
  
    // Except this one--we pre-populate it for the first *3* items
    // This means in our first pass it'll check against itself, which is fine
    let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  
    // Walk through items, starting at index 2
    for (let i = 2; i < arrayOfInts.length; i++) {
      const current = arrayOfInts[i];
  
      // Do we have a new highest product of 3?
      // It's either the current highest
      // or the current times the highest product of two
      // or the current times the lowest product of two
      highestProductOf3 = Math.max(
        highestProductOf3,
        current * highestProductOf2,
        current * lowestProductOf2
      );
  
      // Do we have a new highest product of two?
      highestProductOf2 = Math.max(
        highestProductOf2,
        current * highest,
        current * lowest
      );
  
      // Do we have a new lowest product of two?
      lowestProductOf2 = Math.min(
        lowestProductOf2,
        current * highest,
        current * lowest
      );
  
      // Do we have a new highest?
      highest = Math.max(highest, current);
  
      // Do we have a new lowest?
      lowest = Math.min(lowest, current);
    }
  
    return highestProductOf3;
  }
  ///////////////////////////////////////////
  // Your stacks will contain only integers.
class MaxStack {
    constructor() {
      this.stack = new Stack();
      this.maxesStack = new Stack();
    }
  
    // Add a new item to the top of our stack. If the item is greater
    // than or equal to the last item in maxesStack, it's
    // the new max! So we'll add it to maxesStack.
    push(item) {
      this.stack.push(item);
      if (this.maxesStack.peek() === null || item >= this.maxesStack.peek()) {
        this.maxesStack.push(item);
      }
    }
  
    // Remove and return the top item from our stack. If it equals
    // the top item in maxesStack, they must have been pushed in together.
    // So we'll pop it out of maxesStack too.
    pop() {
      const item = this.stack.pop();
      if (item === this.maxesStack.peek()) {
        this.maxesStack.pop();
      }
      return item;
    }
  
    // The last item in maxesStack is the max item in our stack.
    getMax() {
      return this.maxesStack.peek();
    }
  }

//   Complexity
// O(1) time for push(), pop(), and getMax(). O(m) additional space, where mm is the number of operations performed on the stack.
///////////////////////////////////////////
// unique delivery id
// In the end, we'll be left with the ID that appeared once!

function findUniqueDeliveryId(deliveryIds) {

    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function(deliveryId) {
        uniqueDeliveryId ^= deliveryId;
    });

    return uniqueDeliveryId;
}
// Complexity
// O(n) time, and O(1) space.
//////////////////////////////////////////
function rand5() {
    var result = 7;  // arbitrarily large
    while (result > 5) {
        result = rand7();
    }
    return result;
}
////////////////////////////////////////
function shuffle(theArray) {
    // if it's 1 or 0 items, just return
    if (theArray.length <= 1) return;

    // walk through from beginning to end
    for (var indexWeAreChoosingFor = 0;
            indexWeAreChoosingFor < theArray.length - 1; indexWeAreChoosingFor++) {

        // choose a random not-yet-placed item to place there
        // (could also be the item currently in that spot)
        // must be an item AFTER the current item, because the stuff
        // before has all already been placed
        var randomChoiceIndex = getRandom(indexWeAreChoosingFor, theArray.length - 1);

        // place our random choice in the spot by swapping
        if (randomChoiceIndex !== indexWeAreChoosingFor) {
            var valueAtIndexWeChoseFor = theArray[indexWeAreChoosingFor];
            theArray[indexWeAreChoosingFor] = theArray[randomChoiceIndex];
            theArray[randomChoiceIndex] = valueAtIndexWeChoseFor;
        }
    }
}
// This is a semi-famous algorithm known as the Fisher-Yates shuffle (sometimes called the Knuth shuffle).

// Complexity
// O(n) time and O(1) space.
////////////////////////////////
const result =  ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagramsTogether = (arr) => {
    const obj = {};
    for(let i = 0; i < arr.length; i++) {
        const currentWord = arr[i];
        const sortedWord = currentWord.sort((a, b) => a < b);

        if (obj[sortedWord]) {
            let temp = obj[sortedWord];
            temp.push(currentWord);
            obj[sortedWord] = temp;   
        } else {
            obj[sortedWord] = [currentWord]
        }
    }
    return Object.values(obj);
}
/////////////////////////////////
//reverse linked list
function reversesll(sll){
  
    if(!sll.head || !sll.head.next) return sll;
  
    var nodes=[], 
      current = sll.head;
    //storing all the nodes in an array
    while(current){
      nodes.push(current);
      current = current.next;
    }
      
    var reversedLL = new LinkedList();
    
    reversedLL.head = nodes.pop();
    current = reversedLL.head;
    
    var node = nodes.pop();  
    //make sure to make next of the newly inserted node to be null
    //other wise the last node of your SLL will retain its old next.
    while(node){
       node.next = null;
       current.next = node;
       
       current = current.next;
       node = nodes.pop();
    }
    return reversedLL;
  }

  //----------------------------------------------
  //reverse Double Linked List in place
  function reverseDoublyLL(dll){
    var head = dll.head,
        current = dll.head,
        tmp;
    while(current){
       tmp = current.next;
       current.next = current.previous;
       current.previous = tmp;
       if(!tmp){
          //set the last node as header
          dll.head = current;
       }
       current = tmp;
    }
   return dll;
 }
 ////////////////////////////////////////////
 // Circular Linked List
 // 1) Linked List is empty:  
//     a)  since new_node is the only node in CLL, make a self loop.      
//           new_node->next = new_node;  
//     b) change the head pointer to point to new node.
//           *head_ref = new_node;
// 2) New node is to be inserted just before the head node:    
//   (a) Find out the last node using a loop.
//          while(current->next != *head_ref)
//             current = current->next;
//   (b) Change the next of last node. 
//          current->next = new_node;
//   (c) Change next of new node to point to head.
//          new_node->next = *head_ref;
//   (d) change the head pointer to point to new node.
//          *head_ref = new_node;
// 3) New node is to be  inserted somewhere after the head: 
//    (a) Locate the node after which new node is to be inserted.
//          while ( current->next!= *head_ref && 
//              current->next->data < new_node->data)
//          {   current = current->next;   }
//    (b) Make next of new_node as next of the located pointer
//          new_node->next = current->next;
//    (c) Change the next of the located pointer
//          current->next = new_node; 
////////////////////////////////////////////
/* Memoization is an optimization technique used primarily 
to speed up computer programs by storing the results of 
expensive function calls and returning the cached result 
when the same inputs occur again */
/* Memoizing in simple terms means memorizing or storing in 
memory. A memoized function is usually faster because if 
the function is called subsequently with the previous 
value(s), then instead of executing the function, we would 
be fetching the result from the cache. */

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      let n = args[0];
      if (n in cache) {
        console.log('Fetching from cache', n);
        return cache[n];
      }
      else {
        console.log('Calculating result', n);
        let result = fn(n);
        cache[n] = result;
        return result;
      }
    }
  }
const factorial = memoize(
    (x) => {
        if (x === 0) {
        return 1;
        }
        else {
        return x * factorial(x - 1);
        }
    }
);
  console.log(factorial(5)); // calculated
  console.log(factorial(6)); // calculated for 6 and cached for 5

//   Is memoization same as caching?
// Yes, kind of. Memoization is actually a specific type of 
// caching. While caching can refer in general to any storing
// technique (like HTTP caching) for future use, memoizing 
// specifically involves caching the return values of a 
// function.

//Time complexity: for fibonacci regular recursion:
// 2 power of n. Using memoization technique: O(n square).
// Space complexity: both O(n)
///////////////////////////////////////////
