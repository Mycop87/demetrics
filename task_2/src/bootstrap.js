"use strict"

const readFilePromise = require('fs-readfile-promise');
const parser          = require('./parser');

const getData = () => {
  const inputText   =  readFilePromise('./resources/input.txt', 'utf8');
  const patternText =  readFilePromise('./resources/patterns.txt', 'utf8');

  return Promise.all([inputText, patternText])
}

const getArrayFromText = ({inputText, patternText}) => {
  return {
    inputArray: inputText.split('\n'),
    patternArray: patternText.split('\n')
  }
}

const printData = (result) =>{
 result.forEach(string =>{console.log(string)})
}

const bootstrap = handler => {

  getData().then((files) => {
    const inputText = files[0];
    const patternText = files[1];
    const {inputArray, patternArray} = getArrayFromText({inputText, patternText});

    printData(parser({inputArray, patternArray}, handler));
  });

};

module.exports = bootstrap;