const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\sl452\\Documents\\Gatsby\\hello-world\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("C:\\Users\\sl452\\Documents\\Gatsby\\hello-world\\src\\pages\\about-css-modules.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\sl452\\Documents\\Gatsby\\hello-world\\src\\pages\\index.js")))
}

