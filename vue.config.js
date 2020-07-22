const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',resolve('./src'))
      .set('components',resolve('./src/components'))
      .set('views',resolve('./src/views'))
      .set('assets',resolve('./src/assets'))
      .set('common',resolve('./src/common'))
      .set('api', resolve('./src/api'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
        resolve(__dirname, './src/common/style/variables.less')
      ]
    }
  }
}
