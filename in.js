'use strict';

//  Hapy API Server
const hapi = require('hapi');
const ioc = require('electrolyte');

module.exports = (config) => {
    // Set configuration
    let baseConfig = config.get('Base');

    // Load resources
    ioc.use(ioc.dir('node_modules'))
    ioc.use(ioc.dir('routes'))
    ioc.use(ioc.dir('src'))

    // Initiate new HAPI server
    const api = new hapi.Server();

    api.connection({ port: baseConfig.port });

    api.route(ioc.create('base.routes'));

    return api;
}
