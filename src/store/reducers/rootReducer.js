import { combineReducers } from 'redux';

import { receipt as receiptReducer } from './receipt';
import { cursor as cursorReducer } from './cursor';
import { categories as categoryReducer } from './categories';

export default combineReducers({
    receipt: receiptReducer,
    cursor: cursorReducer,
    categories: categoryReducer,
});
