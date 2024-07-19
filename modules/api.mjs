// An array of the letters from the word game
const letterArr = ["e", "m", "s", "j", "o", "å", "g"];

// path
const path = "/api/suggest";
const prefix = "https://ord.uib.no";

// adds wildcard to every letter for querystring
const arrAsWildCards = () => letterArr.map((letter) => `${letter}*|`);

// parameters
const params = {
  query: `?q=${arrAsWildCards().join("")}`,
  wordLimit: "&n=99999",
  include: "&include=efis",
};

const url = `${prefix}${path}${params.query}${params.wordLimit}${params.include}`;
console.log(url);
// gets words and flattens array
const getWords = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const exactResponseArr = await json.a.exact;
    const freeTextResponseArr = await json.a.freetext;

    //   flattens array
    const exactArr = await exactResponseArr.map((item) => {
      return item[0];
    });
    const freeTextArr = await freeTextResponseArr.map((item) => {
      return item[0];
    });

    const wordArr = exactArr.concat(freeTextArr).sort();

    return wordArr;
  } catch (e) {
    console.log(e);
  }
};

export { letterArr, getWords };
