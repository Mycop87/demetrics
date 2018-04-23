"use strict"

const parse = require('./parsers');
const stdin = process.openStdin();

const bootstrap = handler => stdin.addListener("data", queryString => {
  if(!parse(handler)){
    console.log('invalid argument. use google or bing');

    return;
  }

  parse(handler)(queryString.toString());

});

module.exports = bootstrap;