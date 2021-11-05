module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue ({ file }) {
            // vant是以37.5为基准的，但我们的设计图以75为基准
            return file.indexOf('vant') !== -1 ? 37.5 : 75
        },
        propList: ['*'],
        selectorBlackList: ['van-circle__layer'] //过滤，使某些样式不进行rem转换,如Circle不过滤存在兼容问题
      }
    }
}