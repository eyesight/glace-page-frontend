import { connect } from 'react-redux';
import { fetchReceipts } from '../store/actions/receipt';

const mapStateToProps = (state) => {
    return {
        receipts: state.receipt.items,
        isFetching: state.receipt.isFetching
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReceipts: (url) => {
            dispatch(fetchReceipts(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps);
