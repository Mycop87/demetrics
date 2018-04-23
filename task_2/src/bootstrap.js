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
  if (!parser(handler)) {
      console.log('invalid argument. use "npm run mode1/mode2/mode3" ');
      return;
  }
  
  getData().then((files) => {
    const inputText = files[0];
    const patternText = files[1];
    const {inputArray, patternArray} = getArrayFromText({inputText, patternText});
    printData(parser(handler)({inputArray, patternArray}));
  });

};


module.exports = bootstrap;