'use strict';

// Get configuration
const config = require('config');
const api = require('./in')(config);
// Documentation setup
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

// Documentation runner
api.register([Inert, Vision, {
        register: HapiSwagger,
        options: {
            info: {
                title: 'API Documentation',
                version: Pack.version
            }
        }
    }], (err) => {

    if (err) {
        console.log(err)
    }

    api.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${api.info.uri}`);
    });
})
