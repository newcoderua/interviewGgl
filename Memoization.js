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