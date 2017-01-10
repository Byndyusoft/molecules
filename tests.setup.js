require('babel-core/register');

const mockCssModules = require('mock-css-modules');

mockCssModules.register(['.css', '.scss']);

['.png', '.jpg'].forEach(ext => {
    require.extensions[ext] = () => null;
});
