import axois from 'axios';

export const getAsset = (guid) => (dispatch) => {
    return axois.post('/api/getasset', {guid})
        .then(response => {
            return response.data;
        });
}

export const saveOrder = (order) => (dispatch) => {
    return axois.post('/api/addorder', order)
        .then(response => {
            return response.data;
        });
}
