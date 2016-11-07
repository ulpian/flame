'use strict';

// Get configuration
const config = require('config');
const api = require('./in')(config);

api.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${api.info.uri}`);
});
