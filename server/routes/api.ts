export default (server) => {
    server.route({
        method: 'POST',
        path: '/api/addasset',
        config: {
            handler: (req, reply) => {
                const asset = req.payload;

                console.log(asset);

                reply({
                    Id: 'aaa',
                })
            },
        },
    });

    server.route({
        method: 'POST',
        path: '/api/getasset',
        config: {
            handler: (req, reply) => {
                const { guid } = req.payload;

                reply({
                    Guid: guid,
                    ...{
                        Title: "New object",
                        Name: "New name",
                        Value: 110000101,
                        Status: 'pending'
                    }
                })
            },
        },
    });

    server.route({
        method: 'POST',
        path: '/api/addorder',
        config: {
            handler: (req, reply) => {
                const order = req.payload;
                console.log(order);

                reply('ok');
            },
        },
    });
};
