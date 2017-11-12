const Web3 = require('web3')
import abi from './abi';
import cfg from './config';

const web3 = new Web3(new Web3.providers.HttpProvider(cfg.nodeProvider))
const Contract = new web3.eth.Contract(abi, cfg.contractAddress)

export function saveAsset(asset: IApp.IAsset) {
    console.log('saveAsset', asset);

    let status = asset.Status === 'pending' ? 0 : 1;

    // Contract.methods.newObeject(asset.Id, status, asset.Title, asset.Value, asset.Owner).call((err, resp) => {
    //     console.log('err', err);
    //     console.log('resp', resp);
    // });
    //
}

export function saveOrder(order: IApp.IOrder) {
    console.log('saveOrder', order);

    // let status = order.Status === 'pending' ? 0 : 1;

    // Contract.methods.newRequestr(parseInt(order.ParentId), order.Title, parseInt(order.Value as any), 0, order.Owner).call((err, resp) => {
    //     console.log('err', err);
    //     console.log('resp', resp);
    // });
    //
}

export function getAsset(id) {
    console.log('getAsset', id);

    //
    // Contract.methods.getlastid(62899).call((err, resp) => {
    //     console.log('err', err);
    //     console.log('resp', resp);
    // });

    return {
        asset: {
            Id: id,
            ...{
                Title: "Квартира 1",
                Owner: "0xdae3daea4a63ef4b60600194a9cc1daf98b8e3b8",
                Value: 123141,
                Status: 'pending'
            }
        }, orders: [
            {
                Id: '121',
                ParentId: id,
                Title: "Квартира 1",
                Owner: "0x2FC16BD06f05CC80174F7682C0b58548Fc5A3C75",
                Value: 123141,
                Status: 'pending',
            }
        ]
    }
}

export function setDecision(id, decision) {
    console.log('setDecision', id, decision);

    //
}