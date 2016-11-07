'use strict';

exports = module.exports = (joi, base) => {
    // Set routes array for Hapi
    let routes = [];

    routes.push({
        method: 'GET',
        path: '/',

        config: {
            description: 'Base root route',
            notes: 'Returns a hello world :)',
            tags: ['api']
        },

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

    routes.push({
        method: 'POST',
        path: '/base/{name}/{age}',
        handler: (request, reply) => {
            let someData = base.saveData({
                name: request.params.name,
                age: request.params.age
            })

            reply({ data: someData })
        }
    })

    routes.push({
        method: 'GET',
        path: '/base/{key}',

        config: {
            description: 'Read base reference with a key',
            notes: 'Returns the JSON object from Base reference by its key',
            tags: ['api'],
            validate: {
                params: {
                    key: joi.string()
                }
            }
        },

        handler: (request, reply) => {
            let someData = base.getUserByKey(request.params.key)
            .then((data) => {
                reply({ data: data });
            })
            .catch((err) => {
                reply({ error: err })
            })
        }
    })

    return routes;
};

exports['@require'] = ['joi', 'base/base'];
exports['@singleton'] = true;
