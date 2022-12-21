const path = require("path");

res = {};
res.entry = {
  // uikit: path.join(__dirname, "./src/uikit/uikit-page/uikit-page.js"),
  index: path.join(__dirname, "./src/pages/index/index.js"),
};

res.pages = [
  // { chunks: ["uikit"], page: "uikit.html", template: path.join(__dirname, "./src/uikit/uikit-page/uikit-page.pug") },
  { chunks: ["index"], page: "index.html", template: path.join(__dirname, "./src/pages/index/index.pug") },
];

module.exports = res;
