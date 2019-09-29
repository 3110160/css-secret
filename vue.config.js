module.exports = {
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end();
      config.module
      .rule("md")
      .test(/\.md$/)
      .use("mkdowm-loader")
      .loader("mkdowm-loader")
      .end();
  }
};
