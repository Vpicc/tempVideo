module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true,
  },
  extends: "airbnb",
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ['@src', './src'],
          ['@main', './src/main'],
          ['@models', './src/models'],
          ['@renderer', './src/renderer']
        ],
        extensions: ['.js', '.jsx', '.json', '.css', '.scss']
      }
    }
  }
};
