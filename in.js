'use strict';

//  Hapy API Server
const hapi = require('hapi');
const ioc = require('electrolyte');

module.exports = (config) => {
    // Set configuration
    let baseConfig = config.get('Base');

    // Load resources
    ioc.use('config', baseConfig)
    ioc.use(ioc.dir(__dirname + '/node_modules'))
    ioc.use(ioc.dir(__dirname + '/routes'))
    ioc.use(ioc.dir(__dirname + '/src'))

    // Initiate new HAPI server
    const api = new hapi.Server();

    // API connection config
    api.connection({ port: baseConfig.port });

    // Routes setup
    api.route(ioc.create('base.routes'));

    return api;
}
