// Higher-order functions
// Functions that operate on other functions, either by 
// taking them as arguments or by returning them, are 
// called higher-order functions. Since we have already 
// seen that functions are regular values, there is 
// nothing particularly remarkable about the fact that 
// such functions exist. The term comes from mathematics, 
// where the distinction between functions and other 
// values is taken more seriously.

// Higher-order functions allow us to abstract over
//  actions, not just values. They come in several forms.
//   For example, we can have functions that create new 
//   functions.

function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
// And we can have functions that change other 
// functions.

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1