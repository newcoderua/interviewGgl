function compress(str) {
    let charCounts = [];
    let currentCount = 0;
    let currentChar = '';

    for(let i = 0, char = str[i]; i < str.length - 1; i++) {
        if (char === currentChar) {
            currentCount++;
        } else {
            charCounts.push([char, currentCount])
            currentChar = char;
            currentCount = 1;
        }
    }
    if (currentCount) {
        charCounts.push([currentChar, currentCount]);
    }

    return charCounts.map((char, count) => {
        // if (Integer()) finish it
    })
}

// 01A digital root / compress string
// 01B reverse / sum_rec
// 02A fibonacci / isPalindrome
// 02B valid_ip ? / shuffle
// 03A my_map / 