# mini-css-extract-plugin-nondeterministic-hashes-example
Minimum reproducible example of #308 issue in mini-css-extract-plugin (https://github.com/webpack-contrib/mini-css-extract-plugin/issues/308)

## How to test
```
npm ci
npm test
```
Compare names of compiled files (`main_*.css`). They are different for different source paths when using `MiniCssExtractPlugin`.
Comment out its usage in `webpack.config.js` or remove imports of CSS files in `src/index.js` to get predictable hashes, not dependent on source path.
