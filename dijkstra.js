// Create a 4x4 grid
// Represent the grid as a 2-dimensional array

// var gridSize = 4;
// var grid = [];
// for (var i=0; i<gridSize; i++) {
//   grid[i] = [];
//   for (var j=0; j<gridSize; j++) {
//     grid[i][j] = 'Empty';
//   }
// }

// // Think of the first index as "distance from the top row"
// // Think of the second index as "distance from the left-most column"

// // This is how we would represent the grid with obstacles above
// grid[0][0] = "Start";
// grid[2][2] = "Goal";

// grid[1][1] = "Obstacle";
// grid[1][2] = "Obstacle";
// grid[1][3] = "Obstacle";
// grid[2][1] = "Obstacle";
// the code above usually is done as parameters
var grid = [[1, 1, 1, 1],
            [0, 1, 1, 1],
            [0, 1, 0, 1],
            [1, 1, 9, 1],
            [0, 0, 1, 1]];
var rowQuantity = 5;
var columnQuantity = 4;
var objectOfVisitedCells = {};

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

  
  // This function will check a location's status
  // (a location is "valid" if it is on the grid, is not an "obstacle",
  // and has not yet been visited by our algorithm)
  // Returns "Valid", "Invalid", "Blocked", or "Goal"
var locationStatus = function(location, grid) {
    var dft = location.distanceFromTop;
    var dfl = location.distanceFromLeft;
    // console.log('yoo')
    // console.log(grid[dft][dfl])
    if (location.distanceFromLeft < 0 ||
        location.distanceFromLeft >= columnQuantity ||
        location.distanceFromTop < 0 ||
        location.distanceFromTop >= rowQuantity) {
  
      // location is not on the grid--return false
      return 'Invalid';
    } else if (grid[dft][dfl] === 9) {
      return 'Goal';
    } else if (grid[dft][dfl] === 0 || objectOfVisitedCells[`${dft}${dfl}`] === 'Visited') {
      // location is either an obstacle or has been visited
      return 'Blocked';
    } else {
      return 'Valid';
    }
};

// Explores the grid from the given location in the given
// direction
var exploreInDirection = function(currentLocation, direction, grid) {
    var newPath = currentLocation.path.slice();
    newPath.push(direction);

    var dft = currentLocation.distanceFromTop;
    var dfl = currentLocation.distanceFromLeft;

    if (direction === 'North') {
        dft -= 1;
    } else if (direction === 'East') {
        dfl += 1;
    } else if (direction === 'South') {
        dft += 1;
    } else if (direction === 'West') {
        dfl -= 1;
    }

    var newLocation = {
        distanceFromTop: dft,
        distanceFromLeft: dfl,
        path: newPath,
        status: 'Unknown'
    };
    newLocation.status = locationStatus(newLocation, grid);

    // If this new location is valid, mark it as 'Visited'
    if (newLocation.status === 'Valid') {
        objectOfVisitedCells[`${newLocation.distanceFromTop}${newLocation.distanceFromLeft}`] = 'Visited';
    }

    return newLocation;
};

// start with top left corner
var findShortestPath = function(grid) {
    var distanceFromTop = 0;
    var distanceFromLeft = 0;
  
    // Each "location" will store its coordinates
    // and the shortest path required to arrive there
    var location = {
      distanceFromTop: distanceFromTop,
      distanceFromLeft: distanceFromLeft,
      path: [],
      status: 'Start'
    };
  
    // Initialize the queue with the start location already inside
    var queue = new Queue();
    queue.enqueue(location);
    // console.log(queue.size)
    // Loop through the grid searching for the goal
    while (queue.size() > 0) {
      // Take the first location off the queue
      var currentLocation = queue.dequeue();
  
      // Explore North
      var newLocationNorth = exploreInDirection(currentLocation, 'North', grid);
      if (newLocationNorth.status === 'Goal') {
        return newLocationNorth;
      } else if (newLocationNorth.status === 'Valid') {
        queue.enqueue(newLocationNorth);
      }
  
      // Explore East
      var newLocationEast = exploreInDirection(currentLocation, 'East', grid);
      if (newLocationEast.status === 'Goal') {
        return newLocationEast;
      } else if (newLocationEast.status === 'Valid') {
        queue.enqueue(newLocationEast);
      }
  
      // Explore South
      var newLocationSouth = exploreInDirection(currentLocation, 'South', grid);
      if (newLocationSouth.status === 'Goal') {
        return newLocationSouth;
      } else if (newLocationSouth.status === 'Valid') {
        queue.enqueue(newLocationSouth);
      }
  
      // Explore West
      var newLocationWest = exploreInDirection(currentLocation, 'West', grid);
      if (newLocationWest.status === 'Goal') {
        return newLocationWest;
      } else if (newLocationWest.status === 'Valid') {
        queue.enqueue(newLocationWest);
      }
    } 
    // No valid path found
    return false; 
  };
  // OK. We have the functions we need--let's run them to get our shortest path!
  
  // Create a 4x4 grid
  // Represent the grid as a 2-dimensional array
//   var gridSize = 4;
//   var grid = [];
//   for (var i=0; i<gridSize; i++) {
//     grid[i] = [];
//     for (var j=0; j<gridSize; j++) {
//       grid[i][j] = 'Empty';
//     }
//   }
  
//   // Think of the first index as "distance from the top row"
//   // Think of the second index as "distance from the left-most column"
  
//   // This is how we would represent the grid with obstacles above
//   grid[0][0] = "Start";
//   grid[2][2] = "Goal";
  
//   grid[1][1] = "Obstacle";
//   grid[1][2] = "Obstacle";
//   grid[1][3] = "Obstacle";
//   grid[2][1] = "Obstacle";
  
  console.log(findShortestPath(grid));