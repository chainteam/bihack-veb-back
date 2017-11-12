import { addAssetApi } from '../../../api';

export const saveAsset = (order) => (dispatch) => {
    return addAssetApi(order);
}