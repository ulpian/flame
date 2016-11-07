'use strict';

exports = module.exports = () => {

    class Base {
        static root() {
            return 'hey world!';
        }

        static sayhi(name) {
            return `Hi ${name}`;
        }
    }

    return Base;
};

exports['@singleton'] = true;
