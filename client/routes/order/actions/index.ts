import { addOrderApi, getAssetApi } from '../../../api';

export const getAsset = (id) => (dispatch) => {
    return getAssetApi(id);
}

export const saveOrder = (order) => (dispatch) => {
    return addOrderApi(order);
}
