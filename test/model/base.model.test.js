'use strict';

const config = require('config');
const ioc = require('../../in')(config);

const mocha = require('mocha');
const expect = require('chai').expect;

const Base = ioc.create('base/base');

describe('Base tests', () => {
    it('Should say hi', (done) => {
        expect(Base.sayhi('john')).to.be.ok;
        expect(Base.sayhi('john')).to.be.a('string');
        expect(Base.sayhi(undefined)).to.not.be.ok;
        done();
    });
});
