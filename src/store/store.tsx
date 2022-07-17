import { createStore, applyMiddleware, compose } from 'redux';

import thunk, { ThunkMiddleware } from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootActions = ReceiptAction | CategoryAction |  CursorAction |  LikeAction;

export interface RootState {
    receipt: ReceiptState;
    categories: CategoryState;
    cursor: CursorState;
    likes: LikeState;
  }


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<RootState, RootActions>)),
);

export type AppDispatch = typeof store.dispatch

export default store;