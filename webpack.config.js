const path = require('path');
const htmlWP = require('html-webpack-plugin');

module.exports = {

  // 入口
  entry: path.resolve(__dirname, './src/main.js'),

  // 输出配置
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // 插件配置
  plugins: [

    // html处理
    new htmlWP({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    })

  ],

  // 模块配置
  module: {

    // 这里配置loader
    rules: [

      // 添加css模块的处理, css-loader的作用是打包css, style-loader的作用是执行css
      {
        test: /\.css$/,                            // 配置要打包的文件类型
        use: ['style-loader', 'css-loader']      // 匹配到的文件使用什么loader处理
      },

      // 添加less模块的处理
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },

      // 添加静态资源模块的打包处理
      {
        test: /\.(gif|png|jpg|jpeg|svg|woff|ttf)$/,  // 字体图标, 媒体文件都可以配置
        // use: [ 'url-loader' ]
        use: [
          {
            loader: 'url-loader',
            // 小于10kb的文件转换为base64打包, 大的文件不打包, 可以通过name属性设起新的名字
            options: { limit: 10240, name: '[name]_[hash:8].[ext]' }
          }
        ]
      },

      // 添加js模块的处理, 把js转换为es5
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/ // 第三方包已经打包好了, 这里不用重复打包, 为了提高打包速度, 所以排除掉
      },

      // 添加vue模块的解析打包处理
      // vue文件里, 使用vbase + tab可以快速生成基本模版
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }
}
