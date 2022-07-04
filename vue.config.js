const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  publicPath:
    process.env.NODE_ENV === 'production' ? '/Guy-Geva-27-06-2022/' : '/',
  lintOnSave: false,
});
