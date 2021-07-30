module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    // ============壓縮圖片 start============
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({ bypassOnDebug: true })
      .end();
    // ============壓縮圖片 end============
  }
};
