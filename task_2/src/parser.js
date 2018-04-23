"use strict"

const levenshtein = require('fast-levenshtein');

const limitOfLevenstein = 1;

const finder = ({inputArray, patternArray}, handler) => {
  return inputArray.filter(inputString => {
    return patternArray.find(patternString => {
      return handler({inputString, patternString});
    });
  });
};

const mode1 = ({inputArray, patternArray}) => finder({inputArray, patternArray}, ({inputString,patternString})=> inputString.trim() === patternString.trim());
const mode2 = ({inputArray, patternArray}) => finder({inputArray, patternArray}, ({inputString,patternString})=> inputString.trim().includes(patternString.trim()));
const mode3 = ({inputArray, patternArray}) => finder({inputArray, patternArray}, ({inputString,patternString})=> levenshtein.get(inputString.trim(), patternString.trim()) <= limitOfLevenstein);

const MODES = {
  mode1,
  mode2,
  mode3
};

const parser = type => MODES[type];

module.exports = parser;

