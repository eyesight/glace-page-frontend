import { combineReducers } from 'redux';

import receiptReducer from './receipt';

export default combineReducers({
    receipt: receiptReducer
});
