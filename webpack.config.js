// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/pagination.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    externals: {
        react: 'commonjs react',
        'react-dom': 'commonjs react-dom',
    },
};
