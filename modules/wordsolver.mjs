const filterWords = (wordArr, letterArr) => {
  const initialWords = wordArr.filter(
    (word) =>
      word.length > 3 && [...word].every((letter) => letterArr.includes(letter))
  );
  const words = initialWords.filter((word, i, arr) => arr.indexOf(word) === i);
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
