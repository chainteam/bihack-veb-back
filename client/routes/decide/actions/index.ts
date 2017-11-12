import { getAssetApi, setDecisionApi } from '../../../api';

export const getAsset = (id) => (dispatch) => {
    return getAssetApi(id);
}

export const setDecision = ({ id, decision }) => (dispatch) => {
    return setDecisionApi({ id, decision });
}
