import { saveAsset } from '../asset/action';
import { connect } from 'react-redux';

import Comp from './component';
import { getAsset, saveOrder } from './actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    getAsset: (guid) => dispatch(getAsset(guid)),
    saveOrder: (order) => dispatch(saveOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
