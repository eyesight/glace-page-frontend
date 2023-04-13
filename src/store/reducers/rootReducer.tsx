import { combineReducers } from 'redux';

import { receipt as receiptReducer } from './receipt';
import { cursor as cursorReducer } from './cursor';
import { categories as categoryReducer } from './categories';
import { collections as collectionsReducer } from './collections';
import { likes as likesReducer } from './likes';
import { pages as pagesReducer } from './pages';

export const rootReducer = combineReducers({
    receipt: receiptReducer,
    cursor: cursorReducer,
    categories: categoryReducer,
    collections: collectionsReducer,
    likes: likesReducer,
    pages: pagesReducer
});
