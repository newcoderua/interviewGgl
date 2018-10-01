// Word Count Engine
// Implement a document scanning function wordCountEngine, which 
// receives a string document and returns a list of all unique words
//  in it and their number of occurrences, sorted by the number of 
//  occurrences in a descending order. If two or more words have the
//   same count, they should be sorted according to their order in 
//   the original sentence. Assume that all letters are in english 
//   alphabet. You function should be case-insensitive, so for 
//   instance, the words “Perfect” and “perfect” should be considered
//    the same word.

// The engine should strip out punctuation (even in the middle of
//  a word) and use whitespaces to separate words.

// Analyze the time and space complexities of your solution. 
// Try to optimize for time while keeping a polynomial space 
// complexity.

// Examples:

// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["youll", "1"], ["only", "1"], 
//           ["get", "1"], ["by", "1"], ["just", "1"] ]
// Important: please convert the occurrence integers in the 
// output list to strings (e.g. "3" instead of 3). We ask this 
// because in compiled languages such as C#, Java, C++, C etc.,
//  it’s not straightforward to create mixed-type arrays (as 
//     it is, for instance, in scripted languages like JavaScript,
//      Python, Ruby etc.). The expected output will simply be an 
//      array of string arrays.

// Constraints:

// [time limit] 5000ms
// [input] string document
// [output] array.array.string

const lowerCasedAndCleanedWord = (word) => {
    let result = [];
    let alphabet = 'qwertyuioplkjhgfdsazxcvbnm';
    for(let i = 0; i < word.length; i++) {
      let char = word[i].toLowerCase();
      if(alphabet.indexOf(char)) {
        result.push(char);
      }
    }
    return result.join('');
  }
  
  const getUniqueWordsAndLargestCount = (document) => {
      let splitted = document.split(' ');
      let obj = {};
      let largestCount = 0;
      for(let i = 0; i <= splitted.length; i++) {
        const word = splitted[i];
        const fixedWord = lowerCasedAndCleanedWord(word);
        
        if (obj[fixedWord]) {
            obj[fixedWord]++;
        } else {
            obj[fixedWord] = 1
        }
        if(largestCount < obj[fixedWord]) {
          largestCount = obj[fixedWord]
        }
      }
    return { obj: obj, largestCount: largestCount };
  }
  
  const wordCountEngine = (document) => {
    const objAndLargestCount = getUniqueWordsAndLargestCount(document);
    const largestCount = objAndLargestCount.largestCount;
    const obj = objAndLargestCount.obj;
    let newArray = new Array(largestCount + 1);
    let result = []
    for(var key in obj) {
      let word = key;
      if(newArray[obj[key]]) {
        newArray[obj[key]] = [key]
      } else {
        newArray[obj[key]].concat([key])
      }
    }
    const flattenArray = newArray.flat();
    for(let i = flattenArray.length - 1; i >= 0; i--) {
      const word = flattenArray[i];
      result.push([word, obj[word]])
    }
    return result;
  }
