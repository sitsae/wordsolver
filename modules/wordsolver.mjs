// returns a list of words only containing letters from letterArr
let counter = 0;
const filterWords = (wordArr, letterArr) => {
  const initialWords = [];
  let wordHolder = [];
  for (let word of wordArr) {
    for (let letter of letterArr) {
      for (let wordLetter of word) {
        if (letter === wordLetter) {
          wordHolder.push(letter);
          counter += 1;
        }
      }
    }
    if (wordHolder.length === word.length && word.length > 3) {
      initialWords.push(word);
    }
    wordHolder = [];
  }
  console.log(counter);
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
