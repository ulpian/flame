'use strict';

//  Hapy API Server
const hapi = require('hapi');
// Get configuration
const config = require('config');
const ioc = require('./in')(config);
const Pack = require('./package');

// Initiate new HAPI server
const api = new hapi.Server();

// API connection config
api.connection({ port: config.Base.port });

// Routes setup
api.route(ioc.routes);

// Documentation runner
api.register([require('inert'), require('vision'), {
        register: require('hapi-swagger'),
        options: {
            info: {
                title: `${Pack.name} API Documentation`,
                version: Pack.version
            }
        }
    }], (err) => {

    if (err) {
        console.log(err);
    }

    api.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${api.info.uri}`);
    });
});
