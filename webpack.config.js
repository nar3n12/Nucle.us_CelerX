const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry:[
        '@babel/polyfill',
        './js/core.js'
    ],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'js/bundle.js'
    },
    devServer:{
        contentBase:'./dist',
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'
        })
    ],
    optimization: {
        minimize: false
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use : ["style-loader", "css-loader"]     
            }

          
        ]
    }

}
