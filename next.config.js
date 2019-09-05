// const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withPurgeCss = require("next-purgecss");

const nextConfig = {
  target: "serverless",
  poweredByHeader: false,
  cssModules: false
};

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = withCSS(
  withPurgeCss({
    ...nextConfig,
    purgeCss: {
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html", "js", "css"]
        }
      ],
      whitelist: () => ['text-base']
    },
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]_[hash:base64:5]"
    },
    webpack: config => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,
        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true
        })
      ];

      return config;
    }
  })
);
