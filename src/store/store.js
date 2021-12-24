import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/rootReducer';

import { initialState as receiptInitialState } from './reducers/receipt';


const initialState = {
    'receipt': receiptInitialState
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;