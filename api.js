'use strict';

//  Hapy API Server
const hapi = require('hapi');
const config = require('config');

// Initiate new HAPI server
const api = new hapi.Server();

// Set configuration
let baseConfig = config.get('Base');

api.connection({ port: baseConfig.port });

api.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply({ message: 'hey world!' });
    }
});

api.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${api.info.uri}`);
});
