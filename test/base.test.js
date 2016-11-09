'use strict';

const config = require('config');
const api = require('../in')(config);

const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('supertest');

// Supertest connection to api
const tapi = request(api.listener);

describe('Base tests', () => {
    describe('/', () => {
        it('Should get root endpoint', (done) => {
            tapi.get('/')
            .expect(200, (err, resp) => {

                expect(resp.text).to.be.a('string');
                expect(resp.text).to.equal('hey world!');

                done();
            });
        });
    });
});
