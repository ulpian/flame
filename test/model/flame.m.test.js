'use strict';

const config = require('config');
const ioc = require('../../in')(config);

const mocha = require('mocha');
// Monkey patch with co-mocha
const coMocha = require('co-mocha');
coMocha(mocha);
const expect = require('chai').expect;

const flame = ioc.create('flame/flame');
const flameModel = ioc.create('flame/flame.model');

describe('Flame tests', () => {
    it('Should say hi', (done) => {
        expect(flame.sayhi('john')).to.be.ok;
        expect(flame.sayhi('john')).to.be.a('string');
        expect(flame.sayhi(undefined)).to.not.be.ok;
        done();
    });

    it('Should save a flame object', function* () {
        let save = yield flame.save({
            name: 'Garry',
            heat: 3
        });

        expect(save).to.be.a('object');
    })
});
