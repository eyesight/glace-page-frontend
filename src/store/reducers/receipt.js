import {
    RECEIPTS_RECEIVED,
    RECEIPTS_REQUEST
} from '../actions/receipt';

export const initialState = [];

export const receipt = (state = {
    isFetching: false,
    items: initialState
}, action) => {
    switch (action.type) {
        case RECEIPTS_REQUEST:
            return {
                ...state,
                isFetching: true,
                items: initialState
            }
        case RECEIPTS_RECEIVED:
            return {
                ...state,
                isFetching: false,
                items: action.payload,
            }
        default:
            return state;
    }
}