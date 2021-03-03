# js-portfolio

Install Webpack: npm i webpack webpack-cli -D

Execute Webpack: npx webpack

Activate development mode Webpack: npx webpack --mode development

Activate production mode Webpack: npx webpack --mode production

Activate production mode Webpack and configuration file: npx webpack --mode production --config webpack.config.js

Install Babel: npm i babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

Plug HTML Webpack: npm i html-webpack-plugin -D

Plug CSS Webpack: npm i mini-css-extract-plugin css-loader -D

Plug CSS Stylus Webpack: npm i stylus-loader -D

Get font from Google fonts: http://google-webfonts-helper.herokuapp.com/fonts/ubuntu?subsets=cyrillic,latin

Move files to dist file: npm i url-loader file-loader -D

Copy Webpack Plugin: npm i copy-webpack-plugin -D

Minimizer CSS Webpack: npm i css-minimizer-webpack-plugin terser-webpack-plugin -D

Variables de entorno: npm i dotenv-webpack -D

Clean Webpack: npm i clean-webpack-plugin -D

Stylus: npm i stylus -D

Add Webpack Server: npm i webpack-dev-server -D

Webpack Bundle Analyzer: npm i webpack-bundle-analyzer -D

Analyzer:
npx webpack --profile --json > stats.json
npx webpack-bundle-analyzer stats.json
