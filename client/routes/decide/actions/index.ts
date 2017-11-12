import { getAssetApi } from '../../../api';

export const getAsset = (id) => (dispatch) => {
    return getAssetApi(id);
}
