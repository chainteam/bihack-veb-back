export default (server) => {
    server.route({
        method: 'POST',
        path: '/api/addasset',
        config: {
            handler: (req, reply) => {
                reply({
                    guid: 'aaa',
                })
            },
        },
    });
};
