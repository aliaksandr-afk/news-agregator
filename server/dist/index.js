"use strict";

var _parsePost = _interopRequireDefault(require("../parsePost.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import unirest from "unirest";
// import cheerio from "cheerio";
// function parsePost(url, titleClass, imageClass, imageAttr, textClass, commentsClass, isSlice) {
//     unirest.get(url).end(function(response) {
//         const body = response.body;
//         const $ = cheerio.load(body);
//         const title = $(titleClass).text();
//         if(isSlice) {
//             var image = $(imageClass).attr(imageAttr).slice(22, -2);
//         } else {
//             var image = $(imageClass).attr(imageAttr);
//         };
//         const text = $(textClass).text();
//         const comments = $(commentsClass).text().trim();
//         const post = {
//             title: title,
//             image: image,
//             text: text,
//             comments: comments
//         }
//         console.log(post);
//     })
// }
(0, _parsePost.default)('https://news.tut.by/society/680939.html', 'h1', '.image-captioned>img', 'data-x-src', '#article_body>p', '[itemprop="commentCount"]', false);
(0, _parsePost.default)('https://realt.onliner.by/2020/04/16/groshyk-3', 'h1', '.news-header__image', 'style', '.news-text>p', '#news-header-comments-counter', true);