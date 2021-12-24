import {
    RECEIPTS_FETCHED
} from '../actions/receipt';

export const initialState = null;

export default function receipt(theState = initialState, action) {
    switch (action.type) {
        case RECEIPTS_FETCHED:
            return action.payload;
        default:
            return theState;
    }
}
