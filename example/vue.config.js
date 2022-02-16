//vue.config.js

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(react)\.?(jsx|tsx)(\?.*)?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["babel-preset-react-app"],
              plugins: [
                // "react-refresh/babel"
              ],
              // presets: [
              //   "@babel/preset-env",
              //   "@babel/preset-react",
              //   "@babel/preset-typescript",
              // ],
              // plugins: [
              //   "@babel/plugin-transform-arrow-functions",
              //   "babel-plugin-transform-class-properties",
              //   "@babel/plugin-proposal-class-properties",
              //   [
              //     "@babel/plugin-transform-runtime",
              //     {
              //       regenerator: true,
              //     },
              //   ],
              //   "transform-react-jsx",
              // ],
            },
          },
        },
      ],
    },
  },
};
