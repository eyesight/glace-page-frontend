import {
    CATEGORIES_RECEIVED,
    CATEGORIES_REQUEST
} from '../actions/categories';

export const initialState = [];

export const categories = (state = {
    isFetching: false,
    items: initialState,
}, action) => {
    switch (action.type) {
        case CATEGORIES_REQUEST:
            return {
                ...state,
                isFetching: true,
                items: initialState
            }

        case CATEGORIES_RECEIVED:
            let getAllItems = action.payload;

            return {
                ...state,
                isFetching: false,
                items: getAllItems
            }

        default:
            return state;
    }
}