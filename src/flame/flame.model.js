'use strict';

exports = module.exports = (joi) => {
    return class Flame {}
};

exports['@require'] = ['joi'];
// Do not ensure that this object will have only 1 instance application-wide
exports['@singleton'] = false;
