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
                const { id } = req.payload;

                console.log(id);

                reply({
                    asset: {
                        Id: id,
                        ...{
                            Title: "New object",
                            Owner: "New name",
                            Value: 110000101,
                            Status: 'pending'
                        }
                    }, orders: [
                        {
                            Id: '121',
                            ParentId: id,
                            Title: "New object 1",
                            Owner: "New name 1",
                            Value: 110000101,
                            Status: 'pending',   
                        },
                        {
                            Id: '23425',
                            ParentId: id,
                            Title: "New object 2 ",
                            Owner: "New name 3",
                            Value: 345,
                            Status: 'accepted',   
                        },
                        {
                            Id: '456',
                            ParentId: id,
                            Title: "New object 545",
                            Owner: "New name 343",
                            Value: 4353,
                            Status: 'discard',   
                        }
                    ]
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

    server.route({
        method: 'POST',
        path: '/api/setdecision',
        config: {
            handler: (req, reply) => {
                const decision = req.payload;

                reply('ok');
            },
        },
    });
};
