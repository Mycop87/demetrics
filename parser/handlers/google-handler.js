const cheerio = require('cheerio');


const responseGoogleHandler = (error, response, body) => {
    const $         = cheerio.load(body);
    const links     = $('.r a');
    const firstLink = links[0];
    const text      = $(firstLink).text();
    const url       = $(firstLink).attr('href')
                                  .replace("/url?q=", "");
    
    return {text, url};
}

module.exports = responseGoogleHandler;