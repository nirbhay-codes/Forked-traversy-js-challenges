/* // Solution 1
function titleCase(str) {
  let words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
} */

/* // Solution 2
Regex explanation:
- \b: Word boundary assertion. This asserts that the position is at the beginning or end of a word.
      It does not consume any characters but rather asserts the position.
- \w: Word character shorthand. It matches any word character (alphanumeric character or underscore).
- /g: Global flag. It means the pattern will be applied globally to the entire input string, rather than stopping after the first match.
*/
function titleCase(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

module.exports = titleCase;
