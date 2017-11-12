import { saveAsset } from '../asset/action';
import { connect } from 'react-redux';

import Comp from './component';
import { getAsset, saveOrder } from './actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    getAsset: (id) => dispatch(getAsset(id)),
    saveOrder: (order) => dispatch(saveOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
