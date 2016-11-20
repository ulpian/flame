'use strict';

exports = module.exports = (joi, flame) => {
    // Set routes array for Hapi
    let routes = [];

    routes.push({
        method: 'GET',
        path: '/{name}',
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

    return routes;
};

exports['@require'] = ['joi', 'flame/flame'];
exports['@singleton'] = true;
