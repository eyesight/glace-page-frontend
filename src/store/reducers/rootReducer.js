import { combineReducers } from 'redux';

import { receipt as receiptReducer } from './receipt';
import { cursor as cursorReducer } from './cursor';

export default combineReducers({
    receipt: receiptReducer,
    cursor: cursorReducer,
});
