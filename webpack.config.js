module.exports = {
    target: 'web', // Make sure it's targeting the browser environment
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', // or your preferred loader
          },
        },
      ],
    },
  };
  