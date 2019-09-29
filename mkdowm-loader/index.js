const loaderUtils = require("loader-utils");
const slugify = require("transliteration").slugify;
// 文档可查
const MarkdownIt = require("markdown-it");
const highlight = require("./hljs");
const wrapper = require("./warpper-vue");
// 处理锚点的插件
const markdownItAnchor = require("markdown-it-anchor");

// 接收到.md文件并解析成html
const parser = new MarkdownIt({
  html: true,
  highlight
}).use(markdownItAnchor, {
  level: 2,
  slugify
});

module.exports = function(source) {
  let options = loaderUtils.getOptions(this);
  this.cacheable && this.cacheable();
  options = {
    wrapper,
    ...options
  };
  const content = parser.render(source);
  source = options.wrapper(content);
  console.log(source)
  return source;
};
