[webpack]:https://webpack.js.org/
[postcss-loader]:https://github.com/postcss/postcss-loader
[postcss-global-important-plugin]:https://github.com/PorkSashimi/postcss-global-important-plugin
[other PostCSS plugins]: https://github.com/postcss/postcss#plugins
[postcss-cli]: https://github.com/postcss/postcss-cli

<h1>
  postcss-global-important-plugin
</h1>

<div>
  <img alt="npm" src="https://img.shields.io/npm/v/postcss-global-important-plugin">
  <img alt="npm" src="https://img.shields.io/npm/dy/postcss-global-important-plugin">
  <img alt="npm" src="https://img.shields.io/badge/coverage-100%25-green">
  <img alt="npm" src="https://img.shields.io/badge/test-passing-blue">
</div>

## Features
turns css properties under `:global` in css-module into important

``` diff
.container {
  font-size: 14px;
  :global .ant-btn {
-    font-weight: 500;
+    font-weight: 500 !important;
    &:hover, &:focus, &:visited {
-      color: red;
+      color: red !important;
    }
  }
}
```

## Installation
```sh
// use yarn 
yarn add postcss-global-important-plugin -D

// use npm 
npm install postcss-global-important-plugin -D
```

## Usage

### Webpack
In [webpack] you can use [postcss-loader] with `postcss-global-important-plugin` and [other PostCSS plugins]

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
}
```
And create a `postcss.config.js` with:
```js
module.exports = {
  plugins: [
    'postcss-global-important-plugin'
  ]
}
```

### CLI
You can use the [postcss-cli] to run  [postcss-global-important-plugin] from CLI:

```sh
npm install postcss postcss-cli postcss-global-important-plugin -D
npx postcss *.css --use postcss-global-important-plugin -d build/
```