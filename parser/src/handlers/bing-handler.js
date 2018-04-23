"use strict"

const cheerio = require('cheerio');

const responseBingHandler = (error, response, body) => {
    const $         = cheerio.load(body);
    const links     = $('#b_content .b_algo a');
    const firstLink = links[0];
    const text      = $(firstLink).text();
    const url       = $(firstLink).attr('href')
                                  .replace("/url?q=", "");
    
    return {text, url};
}

module.exports = responseBingHandler;