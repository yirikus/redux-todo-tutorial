// module.exports = {
//   entry: './src/index.js',
//   output: {
//       path: './dist', // __dirname +  './dist'
//       filename: 'bundle.js'
//   }
// }

//github.com/honzapospi
module.exports = {    
    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'cheap-module-source-map',
    entry: [
        './src/index.js'
    ],
    output: {
      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
        path: __dirname+'/dist',
        publicPath: '/',
        /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
        filename: 'bundle.js',
        /**
       * The filename of the SourceMaps for the JavaScript files.
       * They are inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
       */
      sourceMapFilename: 'bundle.map'

    },
    module: {
        noParse: /node_modules\/json-schema\/lib\/validate\.js/,
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            // {
            //     test: /\.less$/,
            //     loader: "style!css!less"
            // },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
};
