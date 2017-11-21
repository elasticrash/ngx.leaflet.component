var webpack = require('webpack');
var path = require('path');

module.exports = () => {
    return {
        entry: {
            main: './src/index.ts'
        },
        output: {
            path: './dist',
            filename: '[name].bundle.js'
        },
        plugins: [
            // Workaround for https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
                path.resolve(__dirname, './src')
            )
        ],
        resolve: {
            extensions: ['.js', '.ts', '.html']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders:
                        [
                            'awesome-typescript-loader?' + JSON.stringify({
                                sourceMap: false,
                                inlineSourceMap: true
                            }),
                            'angular2-template-loader'
                        ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.css$/,
                    loader: 'css-loader'
                },
                {
                    test: /\.ts$/,
                    loader: 'istanbul-instrumenter-loader',
                    exclude: [
                        'node_modules',
                        'test',
                        /\.(e2e|spec)\.ts$/
                    ],
                    enforce: 'post'
                }
            ]
        },
        devtool: 'inline-source-map'
    }
};