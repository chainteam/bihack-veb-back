import { connect } from 'react-redux';

import Comp from './component';
import { getAsset, setDecision } from './actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    getAsset: (id) => dispatch(getAsset(id)),
    setDecision: (id, decision) => dispatch(setDecision({ id, decision })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
