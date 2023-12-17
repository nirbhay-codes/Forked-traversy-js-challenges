/* Alternate solution - my solution
----------------------------------- */
/* function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log('after regex: ', formattedStr);
  let left = 0;
  let right = formattedStr.length - 1;
  while (left < right) {
    if (formattedStr[left] !== formattedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
} */

/* Solution 1:
--------------
Regex explanation:
/: Delimiters indicating the start and end of the regular expression.
[^a-z0-9]: A character class denoted by square brackets. It means "any character that is not in the range a to z or 0 to 9."
/: Delimiter indicating the end of the regular expression.
g: Global flag, meaning it will match all occurrences in the provided text, not just the first one. 

*/
/* function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
} */

// Solution 2
function isPalindrome(str) {
  const formattedStr = removeNonAlphaNumeric(str);
  console.log('formattedStr:', formattedStr);
  const reverse = reverseString(formattedStr);
  return formattedStr === reverse;
}

function removeNonAlphaNumeric(str) {
  let formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      formattedStr += str[i];
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  // Numbers 0-9 || Lowercase letters a-z
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = isPalindrome;
