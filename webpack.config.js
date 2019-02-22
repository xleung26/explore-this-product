const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "./client"),
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                loader: "babel-loader", 
                test: /\.js[x]?/,
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true, 
                            modules: true, 
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}