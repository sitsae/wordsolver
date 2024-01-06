import { solveWord } from "./modules/wordsolver.mjs";
import { letterArr, getWords } from "./modules/api.mjs";

const print = async () => {
  const wordArray = await getWords();
  console.log(solveWord(wordArray, letterArr, "o"));
};

print();
