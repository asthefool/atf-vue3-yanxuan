const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const { TransitionGroup } = require('vue')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'https://you.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/foo':{
        target:'http://localhost:7788',//本地接口
        ws:true,
        changeOrigin:true,
        pathRewrite:{//重写路径
          '^/foo':''
        }
      }
    }
  }
})
