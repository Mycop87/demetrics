"use strict"

const stdin   = process.openStdin();
const parse = require('./parsers');


const initInput = handler => stdin.addListener("data", queryString => {
  if(!parse(handler)){
    console.log('invalid argument. use google or bing');
    return;
  }

  parse(handler)(queryString.toString());

});

initInput(process.argv[2]);