"use strict"

const readFilePromise = require('fs-readfile-promise');
const Parser          = require('./parser');

async function getData() {
  const inputText   = await readFilePromise('./input.txt', 'utf8');
  const patternText = await readFilePromise('./patterns.txt', 'utf8');
  return {
    inputText,
    patternText
  }
}

(function () {
  const param = process.argv[2];

  getData()
    .then(({inputText, patternText}) => {
      const inputArray   = inputText.split('\n');
      const patternArray = patternText.split('\n');
      const parser       = new Parser(inputArray, patternArray);

      if (!param) {
        parser.mode1();
        return;
      }

      if (!parser[param]) {
        console.log('invalid argument. use mode1 or mode2 or mode3');
        return;
      }

      parser[param]();
    });
})();
