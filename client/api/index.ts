import axois from 'axios';

export const getAssetApi = (id) => {
    return axois.post('/api/getasset', {id})
        .then(response => {
            return response.data;
        });
}

export const addOrderApi = (order) => {
    return axois.post('/api/addorder', order)
        .then(response => {
            return response.data;
        });
};


export const addAssetApi = (asset) => {
    return axois.post('/api/addasset', asset)
        .then(response => {
            return response.data;
        });
};

export const setDecisionApi = ({ id, decision }) => {
    return axois.post('/api/setdecision', { id, decision })
        .then(response => {
            return response.data;
        });
};