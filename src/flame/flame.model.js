'use strict';

exports = module.exports = (joi) => {
    const model = {
        name: joi.string().alphanum().max(30).required(),
        heat: joi.number().integer().min(0).max(10)
    }

    return class FlameModel {
        static val = (obj) => {
            joi.validate(obj, model, (err, value) => {
                if (err) {
                    return err;
                }

                return value;
            });
        }
    }
};

exports['@require'] = ['joi'];
// Do not ensure that this object will have only 1 instance application-wide
exports['@singleton'] = false;
