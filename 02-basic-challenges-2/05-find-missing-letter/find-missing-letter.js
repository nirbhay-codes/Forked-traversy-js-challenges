// Solution 1
// function findMissingLetter(arr) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const startIndex = alphabet.indexOf(arr[0]);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alphabet[startIndex + i]) {
//       return alphabet[startIndex + i];
//     }
//   }

//   return '';
// }

// Solution 2
function findMissingLetter(arr) {
  let startAsciiCode = arr[0].charCodeAt(0);

  for (let i = 1; i < arr.length; i++) {
    const currentAsciiCode = arr[i].charCodeAt(0);
    // ! In the alphabet series, the ascii code of the succeeding letter is the ascii code of current letter + 1
    if (currentAsciiCode - startAsciiCode > 1) {
      return String.fromCharCode(startAsciiCode + 1);
    }
    startAsciiCode = currentAsciiCode;
  }
  return '';
}

module.exports = findMissingLetter;
