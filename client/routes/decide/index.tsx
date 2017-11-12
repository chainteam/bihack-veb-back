import { connect } from 'react-redux';

import Comp from './component';
import { getAsset } from './actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    getAsset: (id) => dispatch(getAsset(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
