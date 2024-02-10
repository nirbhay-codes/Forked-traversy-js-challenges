// Solution 1
function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  // * NOTE: This formula considers n = (length of arr + 1) where 1 represents the missing number in the series.
  // * The actual formula to get the sum of 1 to n unique numbers is (n * (n + 1)) / 2;
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

// Solution 2 using map.reduce()
function findMissingNumber_Sol2(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  // * NOTE: This formula considers n = (length of arr + 1) where 1 represents the missing number in the series.
  // * The actual formula to get the sum of 1 to n unique numbers is (n * (n + 1)) / 2;
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
