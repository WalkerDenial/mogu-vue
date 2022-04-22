const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/style/settings/var.scss";
        @import "@/style/tools/_sassMagic.scss";
        `
      },
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-plugin-px2rem')({
              rootValue: 37.5,
              exclude: /(node_module)/,
              minPixelValue: 3
            })
          ]
        }
			},
    }
  }
})
