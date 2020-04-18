"use strict";

var _unirest = _interopRequireDefault(require("unirest"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import parsePost from "../parsePost.js";
function parsePost(url, titleClass, imageClass, imageAttr, textClass, commentsClass, isSlice) {
  _unirest.default.get(url).end(function (response) {
    var body = response.body;

    var $ = _cheerio.default.load(body);

    var title = $(titleClass).text();

    if (isSlice) {
      var image = $(imageClass).attr(imageAttr).slice(22, -2);
    } else {
      var image = $(imageClass).attr(imageAttr);
    }

    ;
    var text = $(textClass).text();
    var comments = $(commentsClass).text().trim();
    var post = {
      title: title,
      image: image,
      text: text,
      comments: comments
    };
    console.log(post);
  });
}

parsePost('https://news.tut.by/society/680939.html', 'h1', '.image-captioned>img', 'data-x-src', '#article_body>p', '[itemprop="commentCount"]', false);
parsePost('https://realt.onliner.by/2020/04/16/groshyk-3', 'h1', '.news-header__image', 'style', '.news-text>p', '#news-header-comments-counter', true);