'use strict';

exports = module.exports = (joi) => {
    const model = {
        name: joi.string().alphanum().max(30).required(),
        heat: joi.number().integer().min(0).max(10).required()
    }

    return class FlameModel {
        static getModel() {
            return model;
        }

        static val(obj) {
            return new Promise((res, rej) => {
                joi.validate(obj, model, (err, value) => {
                    if (err) {
                        rej(err.details);
                    }
                    res(value);
                });
            });
        }
    }
};

exports['@require'] = ['joi'];
exports['@singleton'] = true;
