"use strict"

const levenshtein = require('fast-levenshtein');

const limitOfLevenstein = 1;

const MODES = {
  mode1: ({inputString, patternString}) => inputString.trim() === patternString.trim(),
  mode2: ({inputString, patternString}) => inputString.trim().includes(patternString.trim()),
  mode3: ({inputString, patternString}) => levenshtein.get(inputString.trim(), patternString.trim()) <= limitOfLevenstein
};

const finder = ({inputArray, patternArray}, handler) =>
  inputArray.filter(inputString =>
    patternArray.find(patternString =>
      handler({inputString, patternString})
   )
 );

const parser = ({inputArray, patternArray}, type) => {
	const handler = MODES[type];

	if (!handler){
		return[];
	}

	return finder({inputArray, patternArray}, handler);
}

module.exports = parser;

