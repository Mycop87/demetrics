"use strict"

const cheerio = require('cheerio');
const request = require("request");
const stdin   = process.openStdin();

(function () {
  function main(queryString) {

    const str = encodeURI(queryString);
    const url = `https://www.google.com/search?q=${str}&ie=UTF-8`;

    request(url, function (error, response, body) {

      if (!error) {
        const $         = cheerio.load(body);
        const links     = $('.r a');
        const firstLink = links[0];
        const text      = $(firstLink).text();
        const url       = $(firstLink).attr('href')
                                      .replace("/url?q=", "");

        console.log('text = ', text);
        console.log('url = ', url);

        return;
      }

      console.log(error);
    });
  }

  stdin.addListener("data", function (queryString) {
    main(queryString.toString());
  });

}());