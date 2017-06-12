const path = require("path");
const webpack = require("webpack");

const config = {};
config.entry = {
  index: "./index.js"
};

config.output = {
  path: __dirname + "/dist",
  filename: "bundle.js",
  publicPath: "dist"
};

config.module = config.module || {};
config.module.loaders = config.module.loaders || [];
config.module.loaders.push({
  test: /\.js$/,
  exclude: request => {
    // Some paths are excluded from Babel
    let excludedPaths = ["fs", "node_modules"];
    let excludedRe = new RegExp(`(${excludedPaths.join("|")})`);
    let excluded = !!request.match(excludedRe);

    return excluded;
  }
});

module.exports = config;
