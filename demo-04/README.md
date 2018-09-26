# 使用 superagent 和 cheerio 爬取豆瓣图书 top50

## 目标

在浏览器访问 `127.0.0.1:3000`，爬取豆瓣图书 top50 的书名、链接，以 json 的形式返回。

## 知识点

1. 学习使用 superagent 抓取网页
2. 学习使用 cheerio 分析网页

## 内容

### superagent

> SuperAgent is a small progressive client-side HTTP request library, and Node.js module with the same API, sporting many high-level HTTP client features. 

SuperAgent 是一个小型的 http 请求库。

### cheerio

> Fast, flexible & lean implementation of core jQuery designed specifically for the server.

可以简单理解为服务器端的 jQuery，用来从网页中以 css selector 取数据，使用方式和 jQuery 是一样的。

## 参考
1. [superagent](https://github.com/visionmedia/superagent)
2. [cheerio](https://github.com/cheeriojs/cheerio)