
/**
 * This function should return the n-th number of the fibonacci sequence.
 * This sequence is created by adding the previous two numbers in the sequence
 * together in order to get the next number. The first 2 are chosen to be 1
 * arbitrarily. For example, the first few numbers are:
 *      1, 1, 2, 3, 5, 8, 13, 21
 *
 * fibonacci(0) === 1
 * fibonacci(1) === 1
 * fibonacci(2) === 2
 * fibonacci(3) === 3
 * fibonacci(4) === 5
 ... and so on.
 */
function fibonacci(n) {
  return (n < 2) ? 1 : fibonacci(n-1) + fibonacci(n-2);
}

// console.log(fibonacci());

/**
 * When called this function should print the song add to the song lyrics on each iteration.
   When zero is reached it should add "No more bottles of beer on the wall. No more bottles of beer!"
 */
function bottlesOfBeer(bottlesRemaining = 0, songLyrics = "") {
  if (bottlesRemaining === 0) {
    return "No more bottles of beer on the wall. No more bottles of beer!";
  } else {
    lyrics = bottlesRemaining + " bottles of beer on the wall! " + bottlesRemaining + " of beer! Take one down, pass it around " + (bottlesRemaining-1) + " bottles of beer on the wall! ";
    return lyrics + bottlesOfBeer(bottlesRemaining-1, lyrics);
  }
}

// console.log(bottlesOfBeer(25, ""));

/**
 * This function should return true if the parameter testString is a palindrome
 * and should return false in all other cases.
 */
function isPalindrome(testString) {
  if (testString.length === 1) {
    return true;
  } else {
    if (testString[0] === testString[testString.length-1]) {
      return isPalindrome(testString.substring(1, testString.length-1));
    } else {
      return false;
    }
  }
}

module.exports = {
    fibonacci: fibonacci,
    bottlesOfBeer: bottlesOfBeer,
    isPalindrome: isPalindrome
}
