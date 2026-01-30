var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'srcjs', 'main.jsx'),
    output: {
        path: path.join(__dirname, 'inst/www/language.selector/main_bundle'),
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 50000
                    }
                },
                generator: {
                    filename: 'icons/[name][ext]'
                }
            }
        ]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
