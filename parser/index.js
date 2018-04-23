"use strict"

const request = require("request");
const stdin   = process.openStdin();
const responseBingHandler = require("./handlers/bing-handler");
const responseGoogleHandler = require("./handlers/google-handler");


const printResult = ({text, url}) => {
  console.log('text = ', text);
  console.log('url = ', url);
}

const globalParser = url => handler => request(url, (...args) => printResult(handler(...args)));

const googleParser = query => globalParser(`https://www.google.com/search?q=${query}&ie=UTF-8`)(responseGoogleHandler);

const bingParser = query => globalParser(`https://www.bing.com/search?q=${query}&ie=UTF-8`)(responseBingHandler);

const PARSERS = {
  google: googleParser,
  bing: bingParser
};

const parse = type => PARSERS[type];

const initInput = handler => stdin.addListener("data", queryString => {
  if(!parse(handler)){
    console.log('invalid argument. use google or bing');
    return;
  }

  parse(handler)(queryString.toString());

});

initInput(process.argv[2]);