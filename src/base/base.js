'use strict';

exports = module.exports = (joi, firebaseManager) => {

    // Set firebase
    let fb = new firebaseManager('/base/data');

    class Base {
        static root() {
            return 'hey world!';
        }

        static sayhi(name) {
            if (name !== undefined) {
                return `Hi ${name}`;
            } else {
                return false
            }
        }

        static saveData(post) {
            return fb.save(post);
        }

        static getUserByKey(key) {
            return new Promise((res, rej) => {
                fb.readByKey(key)
                .then((data) => {
                    res(data);
                })
                .catch((err) => {
                    rej(err);
                });
            })
        }
    }

    return Base;
};

exports['@require'] = ['joi', 'util/firebaseManager'];
exports['@singleton'] = true;
