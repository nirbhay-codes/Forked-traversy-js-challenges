/* // Solution 1
function titleCase(str) {
  let words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
} */

// Solution 2
function titleCase(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

module.exports = titleCase;
