import { connect } from 'react-redux';

import Comp from './component';
import { saveAsset } from './action';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    saveAsset: (data) => dispatch(saveAsset(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
