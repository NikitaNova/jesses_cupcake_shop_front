const html_webpack_plugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
    mode:"development",
    entry: {
        homepage:'./src/script/1-homepage/homepage.js',
        menu:'./src/script/2-menu/menu-app.js',
        cart:'./src/script/3-checkout/cart-app.js',
    },
    output: {
        path:path.resolve(__dirname,'build'),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            { test:/\.(svg|png|jpe?g|gif)$/,
                use:{
                    loader:"svg-inline-loader",
                    options: {
                        name:"[name].[ext]",
                        outputPath:"build/images"
                    }
                },
                exclude: /node_modules/
            },
            {test:/\.s[ac]ss$/i,use:"sass-loader"},
            {test:/\.css$/,use:"css-loader"},
            {test:/\.js$/,use:'babel-loader',
                exclude: /node_modules/}
        ]
    },
    plugins: [
        new html_webpack_plugin({
            filename:"index.html",
            template:'./src/public/homepage.html',
            chunks:['homepage']
        }),
        new html_webpack_plugin({
            filename:"menu.html",
            template:'./src/public/menu.html',
            chunks:['menu']
        }),
        new html_webpack_plugin({
            filename:"cart.html",
            template:'./src/public/cart.html',
            chunks:['cart']
        })
    ]
}