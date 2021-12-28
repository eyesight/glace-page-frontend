import { connect } from 'react-redux';

import { fetchReceipts } from './../store/actions/receipt';
import HomePage from '../components/_pages/HomePage';

const mapStateToProps = (state) => {
    return {
        receipts: state.receipt.items,
        isFetching: state.receipt.isFetching
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReceipts: () => {
            dispatch(fetchReceipts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage); 
