import { createStore, applyMiddleware, compose } from 'redux';

import thunk, { ThunkMiddleware } from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

// import { initialState as receiptInitialState } from './reducers/receipt';
// import { initialState as categoryInitialState } from './reducers/categories';
// import { initialState as cursorInitialState } from './reducers/cursor';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// const preloadedState = {
//     'receipt': receiptInitialState,
//     'categories': categoryInitialState,
//     'cursor': cursorInitialState
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootActions = ReceiptAction | CategoryAction |  CursorAction;

export interface RootState {
    receipt: ReceiptState;
    categories: CategoryState;
    cursor: CursorState;
  }


const store = createStore(
    rootReducer,
    // preloadedState,
    composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<RootState, RootActions>)),
);

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;

// export interface RootState {
//     member: MemberState;
//     category: CategoryState;
//   }
  
//   const rootReducer = combineReducers<RootState, RootActions>({
//     member,
//     category,
//   });
  
//   export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, RootActions>))
//   );