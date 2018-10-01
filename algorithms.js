// Linked List
class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value)
    }
    
    addToHead(value) {
        const newNode = { value }; // 1
        newNode.next = this.head;  // 2
        this.head = newNode;       // 3
        this.length++;
        return this;
    } //Time complexity is O(1), compare to Array where it is O(n)

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
            
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
            
        return value;
    }

    find(val) {
        let thisNode = this.head;
     
        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode;
            }
                
            thisNode = thisNode.next;
        }
         
        return thisNode;
    } //O(n)

    remove(val) {
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === val) {
            this.removeFromHead();
            return this;
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    } //This is a linear operation in both linked lists and arrays
}

function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

function DoublyLinkedList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

// DoublyLinked List 
DoublyLinkedList.prototype.add = function(value) {
    var node = new Node(value);
 
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
 
    this._length++;
     
    return node;
};

DoublyLinkedList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};

DoublyLinkedList.prototype.removeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
 
        // 2nd use-case: there is a second node
        if (!this.head) {
            this.head.previous = null;
        // 2nd use-case: there is no second node
        } else {
            this.tail = null;
        }
 
    // 3rd use-case: the last node is removed
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    // 4th use-case: a middle node is removed
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
 
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;
 
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }
 
    this._length--;
 
    return message.success;
};

DoublyLinkedList.prototype.remove = function(data) {
    var current = this.head;
    while(current) {
      if(current.data === data) {
        if(current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if(current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if(current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.numberOfValues--;
      }
      current = current.next;
    }
}

// Stack
function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.push = function(data) {
    // increases the size of our storage
    let size = this._size++;
 
    // assigns size as a key of storage
    // assigns data as the value of this key
    this._storage[size] = data;
};

Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};

// Queue
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};

Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
};

// BFS AND DFS
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function 
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
         
        // step 1
    })(this._root);
 
};

Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
     
    queue.enqueue(this._root);
 
    currentTree = queue.dequeue();
 
    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
 
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

// tree is an example of a root node
tree.contains(function(node){
    if (node.data === 'two') {
        console.log(node);
    }
}, tree.traverseBF);

// if I need add or remove methods -> https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393


// This Binary Search Tree is implemented using the prototypal pattern

var BinarySearchTree = function(value) {
    var instance = Object.create(BinarySearchTree.prototype);
  
      instance.value = value;
      // a BST where all values are higher than than the current value.
      instance.right = undefined;
      // a binary search tree (BST) where all values are lower than than the current value.
      instance.left = undefined;
  
    return instance
  };
  
  BinarySearchTree.prototype.insert = function (value) {
    // accepts a value and places in the tree in the correct position.
    var node = BinarySearchTree(value);
  
    function recurse(bst) {
      if (bst.value > value && bst.left === undefined) {
        bst.left = node;
      } else if (bst.value > value) {
        recurse(bst.left);
      } else if (bst.value < value && bst.right === undefined) {
        bst.right = node;
      } else if (bst.value < value) {
        recurse(bst.right);
      }
    }
  
    recurse(this);
  }
  
  BinarySearchTree.prototype.contains = function (value) {
    var doesContain = false;
    //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
    function recurse(bst) {
      if (bst.value === value) {
        doesContain = true;;
      } else if (bst.left !== undefined && value < bst.value) {
        recurse(bst.left);
      } else if (bst.right !== undefined && value > bst.value) {
        recurse(bst.right)
      }
    }
  
    recurse(this);
    return doesContain;
  }
  
  BinarySearchTree.prototype.depthFirstLog = function (callback) {
    //accepts a callback and executes it on every value contained in the tree.
    function recurse(bst) {
      callback.call(bst, bst.value)
  
      if (bst.left !== undefined) {
        recurse(bst.left)
      }
  
      if (bst.right !== undefined) {
        recurse(bst.right);
      }
    }
  
    recurse(this);
  }