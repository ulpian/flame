'use strict';

exports = module.exports = (joi, firebaseManager, flameModel) => {

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

        static * save(flame) {
            return yield flameModel.val(flame);
        }
    }
};

exports['@require'] = ['joi', 'firebaseManager', 'flame/flame.model'];
exports['@singleton'] = true;
