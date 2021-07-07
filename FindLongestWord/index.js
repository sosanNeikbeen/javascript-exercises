const str = "This is a reminder that you can handle anything";
function findLongestWord(str) {
  var longestWord = str.split(" ").reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}
console.log(findLongestWord(str));
