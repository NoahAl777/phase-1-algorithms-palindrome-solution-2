function isPalindrome(word) {
  for (frontPointer = 0; frontPointer < word.length / 2; frontPointer++) {
    let backPointer = word.length - 1 - frontPointer
    if (word[frontPointer] !== word[backPointer]) return false
  }
  return true
}

/* 
  Add your pseudocode here
  check first and last letter of string for equality, then second and second last, etc
    - find middle of word by dividing word by two
      - ignore the middle letter if odd number of chars(e.g: 'color' ignores letter[2])
    - iterate through word letters with loop
    - return false if any instance of comparison is not equal 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("police"))
}

module.exports = isPalindrome;
