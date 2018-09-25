var files = require.context('.', true, /\.js$/);
var modules = {};

files.keys().forEach(function (key) {
  if (key === './index.js') return;
  modules[key.split('/')[2].replace(/(\.\/|\.js)/g, '')] = files(key);
});
module.exports = modules;