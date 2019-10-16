const hljs = require("highlight.js");

// 代码高亮处理
module.exports = function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(lang, str, true).value;
  }
  return "";
};
