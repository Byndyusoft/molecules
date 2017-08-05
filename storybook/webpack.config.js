module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader?modules&localIdentName=[folder]--[local]__[hash:base64:5]', 'postcss-loader']
        }, {
            test: /\.(png|svg)$/,
            use: 'file-loader?name=img/[name].[ext]'
        }]
    }
};
