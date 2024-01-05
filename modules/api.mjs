// An array of the letters from the word game
const letterArr = ["a", "g", "m", "p", "v", "i", "c"];

// path
const path = "/api/suggest";
const prefix = "https://ord.uib.no";

// adds wildcard to every letter for querystring
const arrAsWildCards = () => letterArr.map((letter) => `${letter}_*|`);

// parameters
const params = {
  query: `?q=${arrAsWildCards().join("")}`,
  wordLimit: "&n=99999",
  include: "&include=e",
};

const url = `${prefix}${path}${params.query}${params.wordLimit}${params.include}`;

// gets words and flattens array
const getWords = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const responseArr = await json.a.exact;
    //   flattens array
    const wordArr = await responseArr.map((item) => {
      return item[0];
    });
    return wordArr;
  } catch (e) {
    console.log(e);
  }
};

export { letterArr, getWords };
