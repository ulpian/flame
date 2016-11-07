'use strict';

exports = module.exports = (joi, firebaseManager) => {

    // Set firebase
    let fb = new firebaseManager('/base/employees');

    class Base {
        static root() {
            return 'hey world!';
        }

        static sayhi(name) {
            return `Hi ${name}`;
        }

        static saveData(post) {
            return fb.save(post);
        }
    }

    return Base;
};

exports['@require'] = ['joi', 'util/firebaseManager'];
exports['@singleton'] = true;
