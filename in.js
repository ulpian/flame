'use strict';

const ioc = require('electrolyte');

module.exports = (config) => {
    // Set configuration
    let baseConfig = config.get('Base');

    // Load resources
    ioc.use('config', baseConfig);
    ioc.use(ioc.node_modules());
    ioc.use(ioc.dir(__dirname + '/routes'));
    ioc.use(ioc.dir(__dirname + '/src'));

    ioc.routes = [];
    ioc.routes = ioc.routes.concat(ioc.create('flame.routes'));

    return ioc;
}
