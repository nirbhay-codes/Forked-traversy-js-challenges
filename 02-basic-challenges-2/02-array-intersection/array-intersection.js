// Solution 1
/* function arrayIntersection(arr1, arr2) {
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !res.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }
  return res;
} */

// Solution 2
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const res = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      res.push(num);
    }
  }
  return res;
}

module.exports = arrayIntersection;
