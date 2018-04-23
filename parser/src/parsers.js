"use strict"

const request = require("request");
const responseBingHandler = require("./handlers/bing-handler");
const responseGoogleHandler = require("./handlers/google-handler");
const printResult = require("./output");

const globalParser = url => handler => request(url, (...args) => printResult(handler(...args)));

const googleParser = query => globalParser(`https://www.google.com/search?q=${query}&ie=UTF-8`)(responseGoogleHandler);

const bingParser = query => globalParser(`https://www.bing.com/search?q=${query}&ie=UTF-8`)(responseBingHandler);

const PARSERS = {
  google: googleParser,
  bing: bingParser
};

const parse = type => PARSERS[type];

module.exports = parse;