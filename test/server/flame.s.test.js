'use strict';

const config = require('config');
const hapi = require('hapi');
const ioc = require('../../in')(config);
const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('supertest');

// Initiate new HAPI server
const api = new hapi.Server();
// API connection config
api.connection({ port: config.Base.port });
// Routes setup
api.route(ioc.routes);

// Supertest connection to api
const tapi = request(api.listener);

describe('Flame http endpoints tests', () => {
    describe('/hi', () => {
        it('Should get root endpoint', (done) => {
            tapi.get('/hi/john')
            .set('Accept', 'application/json')
            .expect(200, (err, resp) => {
                if (err) throw new Error(err);
                expect(resp.text).to.be.a('string');
                done();
            });
        });
    });

    describe('/flame', () => {
        it('Should save a flame', (done) => {
            tapi.post('/flame')
            .set('Accept', 'application/json')
            .send({
                name: 'Garry',
                heat: 3
            })
            .expect(200, (err, resp) => {
                if (err) throw new Error(err);
                expect(resp.body).to.be.a('object');
                done();
            });
        });

        it('Should fail on providing no params', (done) => {
            tapi.post('/flame')
            .set('Accept', 'application/json')
            .send({})
            .expect(400, (err, resp) => {
                if (err) throw new Error(err);
                expect(resp.body.error).to.be.a('string');
                done();
            });
        });
    });
});
