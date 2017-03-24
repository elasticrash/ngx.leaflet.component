module.exports = () => {
    return {
        entry: {
            main: './index.ts'
        },
        output: {
            path: './dist',
            filename: '[name].bundle.js'
        },
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