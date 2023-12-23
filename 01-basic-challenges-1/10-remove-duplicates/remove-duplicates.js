/* function removeDuplicates(arr) {
  let uniqueResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueResult.includes(arr[i])) {
      uniqueResult.push(arr[i]);
    }
  }
  return uniqueResult;
} */

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
