# Word puzzle solver
### Clone repo, ``npm install`` and solve VG's [word star game](https://www.vg.no/spill/ordstjernen).

The program uses [University of Bergen's](https://ordbokene.no/api) dictionary API to get
all norwegian words that match the letter array given to the program.

#### To solve the word star game, you must:
1. Enter **ALL** the letters given to you in the game to the constant: ``letterArr``
on line 2 of file: ``./modules/api.mjs``.
2. Enter the middle, highlited letter as the last parameter in the ``solveWord()`` function on line 6 of ``./main.mjs``.

    > If highlited letter is 'm': ``console.log(solveWord(wordArray, letterArr, "m"));``
3. ``node main.mjs`` in console.

