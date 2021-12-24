import { connect } from 'react-redux';

import { loadReceipts } from './../store/actions/receipt';
import HomePage from '../components/_pages/HomePage';

function mapStateToProps(theState) {
    console.log(theState);
    return {
        receipt: theState
    };
}

export default connect(mapStateToProps, {
    loadReceipts
})(HomePage); 
