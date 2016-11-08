'use strict';

// Get configuration
const config = require('config');
const api = require('./in')(config);
const Pack = require('./package');

// Documentation runner
api.register([require('inert'), require('vision'), {
        register: require('hapi-swagger'),
        options: {
            info: {
                title: 'API Documentation',
                version: Pack.version
            }
        }
    },{
        register: require('good'),
        options: {
            ops: {
                interval: 1000
            },
            reporters: {
                console: [{
                    module: 'good-console'
                }, 'stdout'],
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
