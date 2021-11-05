module.exports = {
    devServer:{
        port:6688,//默认端口号
        proxy:{
            // recruit_api
            '/customer_api':{
                target:'https://office.51viphome.com:30000',//要跨域的地址
                ws:true,
                changeOrigin:true, //是否要跨域
                pathRewrite:{//重写路径
                    '^/customer_api':'' 
                }
              }
        }
    }
}