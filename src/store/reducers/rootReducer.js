import { combineReducers } from 'redux';

import { receipt as receiptReducer } from './receipt';

export default combineReducers({
    receipt: receiptReducer
});
