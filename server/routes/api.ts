import * as guid from 'guid';
import {
    saveAsset,
    saveOrder,
    getAsset,
    setDecision,
} from '../web3';

export default (server) => {
    server.route({
        method: 'POST',
        path: '/api/addasset',
        config: {
            handler: (req, reply) => {
                const raw = req.payload;
                const asset = {
                    Id: Math.round(Math.random()*100000),
                    Title: raw.title,
                    Owner: raw.owner,
                    Value: raw.value,
                    Status: 'done'
                }

                saveAsset(asset);
                reply(asset);
            },
        },
    });

    server.route({
        method: 'POST',
        path: '/api/addorder',
        config: {
            handler: (req, reply) => {
                const order = req.payload;
                order.Status = 'pending';

                saveOrder(order);
                reply('ok');
            },
        },
    });

    server.route({
        method: 'POST',
        path: '/api/getasset',
        config: {
            handler: (req, reply) => {
                const { id } = req.payload;
                const data = getAsset(id);

                reply(data);
            },
        },
    });

    server.route({
        method: 'POST',
        path: '/api/setdecision',
        config: {
            handler: (req, reply) => {
                const payload = req.payload;
                setDecision(payload.id, payload.decision);

                reply('ok');
            },
        },
    });
};
