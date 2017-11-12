import axois from 'axios';

export const saveAsset = (data) => (dispatch) => {
    return axois.post('/api/addasset', data)
        .then(response => {
            return response.data;
        });
}