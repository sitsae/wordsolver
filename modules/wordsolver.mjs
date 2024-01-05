// returns a list of words only containing letters from letterArr
const filterWords = (wordArr, letterArr) => {
  const words = [];
  let wordHolder = [];
  for (let word of wordArr) {
    for (let letter of letterArr) {
      for (let wordLetter of word) {
        if (letter === wordLetter) {
          wordHolder.push(letter);
        }
      }
    }
    if (wordHolder.length === word.length && word.length > 3) {
      words.push(word);
    }
    wordHolder = [];
  }
  return words;
};

// filters out words not containing required letter
const containsReqLetter = (wordArr, reqLetter) =>
  wordArr.filter((word) => word.includes(reqLetter));

// function to solve word based on seven letters
// returns an array of minimum 4 letter words,
// containing at least two of - and only the inputed - letters.
// every word must contain the required letter
function solveWord(wordArr, letterArr, reqLetter) {
  return containsReqLetter(filterWords(wordArr, letterArr), reqLetter);
}
export { solveWord };
