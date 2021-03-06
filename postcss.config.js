module.exports = {
    /* eslint-disable global-require */
    plugins: [
        require('postcss-import'), // Plugin to transform @import rules by inlining content
        require('postcss-custom-properties'), // Plugin to transform W3C CSS Custom Properties for variables syntax to more compatible CSS
        require('postcss-calc'), // Plugin to reduce calc()
        require('postcss-nested'), // Plugin to unwrap nested rules like how Sass does it
        require('postcss-custom-selectors'), // Plugin to transform W3C CSS Extensions (Custom Selectors) to more compatible CSS
        require('postcss-color-function'), // Plugin to transform W3C CSS color function to more compatible CSS
        require('autoprefixer') // Add vendor prefixes to CSS rules using values from caniuse.com
    ]
    /* eslint-enable global-require */
};
