'use strict';

exports = module.exports = (joi, flame, flameModel) => {
    // Set routes array for Hapi
    let routes = [];

    routes.push({
        method: 'GET',
        path: '/hi/{name}',
        handler: (request, reply) => {
            reply(flame.sayhi(request.params.name));
        },
        config: {
            validate: {
                params: {
                    name: joi.string().min(3)
                }
            }
        }
    });

    routes.push({
        method: 'POST',
        path: '/flame',
        handler: (request, reply) => {
            reply('flame.save');
        },
        config: {
            validate: {
                params: flameModel.getModel()
            }
        }
    });

    return routes;
};

exports['@require'] = ['joi', 'flame/flame', 'flame/flame.model'];
exports['@singleton'] = true;
