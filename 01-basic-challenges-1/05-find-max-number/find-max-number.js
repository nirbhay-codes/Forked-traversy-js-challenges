/* // Solution 1
function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
} */

// Solution 2
function findMaxNumber(arr) {
  return Math.max(...arr);
}

module.exports = findMaxNumber;
