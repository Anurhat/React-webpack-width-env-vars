module.exports = function(env) {
    const path = require('path');
    const webpack = require('webpack');
    const envVars = require(`./src/environments/environment.${env}`);

    const config = {
        entry: './src/App.jsx',

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public'),
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        'react-hot-loader',
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['es2015', 'react']
                            }
                        }
                    ]
                }
            ]
        },

        devtool: 'eval-source-map',

        resolve: {
            extensions: ['.js', '.jsx', '.json', '*']
        },

        plugins: [
            new webpack.DefinePlugin(envVars)
        ]
    };

    return config;
};
