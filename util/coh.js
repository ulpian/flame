'use strict';

exports = module.exports = (co) => {
    return (gen) => {
        let handler = co.wrap(gen);
        return (request, reply) => {
            return handler.bind(this)(request, reply)
        }
    }
};

exports['@require'] = ['co'];
exports['@singleton'] = true;
