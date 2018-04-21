"use strict"

const levenshtein = require('fast-levenshtein');

class Parser {
  constructor(inputArray, patternArray) {
    this.inputArray        = inputArray;
    this.patternArray      = patternArray;
    this.limitOfLevenstein = 1;
  }

  mode1() {
    this.inputArray.forEach(inputLine => {
      this.patternArray.forEach(patternLine => {
        if (patternLine.trim() === inputLine.trim()) {
          console.log(inputLine);
        }
      });
    });
  }

  mode2() {
    this.inputArray.forEach(inputLine => {
      this.patternArray.forEach(patternLine => {
        if (inputLine.indexOf(patternLine.trim()) >= 0) {
          console.log(inputLine);
        }
      });
    });
  }

  mode3() {
    this.inputArray.forEach(inputLine => {
      this.patternArray.forEach(patternLine => {
        if (levenshtein.get(inputLine.trim(), patternLine.trim()) <= this.limitOfLevenstein) {
          console.log(inputLine);
        }
      });
    });
  }
}

module.exports = Parser;