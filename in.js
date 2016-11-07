'use strict';

//  Hapy API Server
const hapi = require('hapi');
const ioc = require('electrolyte');

module.exports = (config) => {
    // Set configuration
    let baseConfig = config.get('Base');

    // Load resources
    ioc.use('config', baseConfig)
    ioc.use(ioc.dir('node_modules'))
    ioc.use(ioc.dir('routes'))
    ioc.use(ioc.dir('src'))

    // Initiate new HAPI server
    const api = new hapi.Server();

    // API connection config
    api.connection({ port: baseConfig.port });

    // Routes setup
    api.route(ioc.create('base.routes'));

    return api;
}