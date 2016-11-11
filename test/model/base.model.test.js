'use strict';

const config = require('config');
const ioc = require('../../in')(config);

const mocha = require('mocha');
const expect = require('chai').expect;

describe('Base tests', () => {
    describe('/', () => {
        it('Should get root endpoint', (done) => {
            done();
        });
    });
});
