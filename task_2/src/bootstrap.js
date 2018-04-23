"use strict"

const readFilePromise = require('fs-readfile-promise');
const parser          = require('./parser');

async function getData() {
  const inputText   =  readFilePromise('./src/input.txt', 'utf8');
  const patternText =  readFilePromise('./src/patterns.txt', 'utf8');

  return await Promise.all([inputText, patternText])
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