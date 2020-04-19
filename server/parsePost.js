const unirest = require("unirest");
const cheerio = require("cheerio");

function parsePost(url, titleClass, imageClass, imageAttr, textClass, commentsClass, isSlice) {
    unirest.get(url).end(function(response) {
        const body = response.body;
        const $ = cheerio.load(body);
        const title = $(titleClass).text();
        if(isSlice) {
            var image = $(imageClass).attr(imageAttr).slice(22, -2);
        } else {
            var image = $(imageClass).attr(imageAttr);
        };
        const text = $(textClass).text();
        const comments = $(commentsClass).text().trim();
    
        const post = {
            title: title,
            image: image,
            text: text,
            comments: comments
        }
        console.log(post);
    })
}

module.exports = parsePost;