'use strict';

exports = module.exports = (joi, base) => {
    // Set routes array for Hapi
    let routes = [];

    routes.push({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply(base.root());
        }
    });

    routes.push({
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) => {
            reply(base.sayhi(request.params.name));
        },
        config: {
            validate: {
                params: {
                    name: joi.string().min(3)
                }
            }
        }
    })

    return routes;
};

exports['@require'] = ['joi', 'base/base'];
exports['@singleton'] = true;
