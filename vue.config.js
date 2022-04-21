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
      }
    }
  }
})
