module.exports = {
  plugins: {
    "postcss-import": {},
    autoprefixer: {},
    "postcss-env-function": {
      importFrom: "./css-env-variables.js",
    },
    "postcss-css-variables": {},
    "postcss-url": {
      url: "inline",
      maxSize: 100,
    },
  },
};
