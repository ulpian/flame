'use strict';

exports = module.exports = (joi, firebaseManager) => {

    // Set firebase
    let fb = new firebaseManager('/flames');

    return class Flame {
        static sayhi(name) {
            if (name !== undefined) {
                return `Hi ${name}`;
            } else {
                return false
            }
        }
    }
};

exports['@require'] = ['joi', 'util/firebaseManager'];
exports['@singleton'] = true;
