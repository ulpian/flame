'use strict';

exports = module.exports = (firebase, config) => {

    class Firebase {
        constructor(ref) {
            let fb = firebase.initializeApp(config.Base.firebase);
            this.db = fb.database();
            this.ref = this.db.ref(ref);
        }

        setChild(child) {
            this.child = this.ref.child(child);
        }

        save(data) {
            let newObj = this.ref.push();
            newObj.set(data)
            return newObj.key;
        }
    }

    return Firebase;
};

exports['@require'] = ['firebase', 'config'];
exports['@singleton'] = true;
