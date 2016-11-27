'use strict';

exports = module.exports = (joi, coh, flame, flameModel) => {
    // Set routes array for Hapi
    let routes = [];

    routes.push({
        method: 'GET',
        path: '/hi/{name}',
        config: {
            handler: (request, reply) => {
                reply(flame.sayhi(request.params.name));
            },
            validate: {
                params: {
                    name: joi.string().min(3)
                }
            },
            description: 'Make the API say hi',
            notes: 'Returns a string with a sentence saying hi',
            tags: ['api']
        }
    });

    routes.push({
        method: 'POST',
        path: '/flame',
        config: {
            handler: coh(function* (request, reply) {
                reply(yield flame.save(request.payload));
            }),
            validate: {
                payload: flameModel.getModel()
            },
            description: 'Create a new flame',
            notes: 'Returns a new flame object',
            tags: ['api']
        }
    });

    return routes;
};

exports['@require'] = ['joi', 'coh', 'flame/flame', 'flame/flame.model'];
exports['@singleton'] = true;
