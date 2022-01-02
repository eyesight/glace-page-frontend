import { getStorage, changeStorage } from '../../helper/constants/storageFunction';
import { getURLSearchParam } from '../../helper/constants/urlSearchParamsFunction';
import {
    RECEIPTS_RECEIVED,
    RECEIPTS_REQUEST,
    RECEIPTS_PORTION_PLUS,
    RECEIPTS_PORTION_MINUS
} from '../actions/receipt';

export const initialState = [];
export const initialStatePortion = 0;

export const receipt = (state = {
    isFetching: false,
    items: initialState,
    portions: initialStatePortion
}, action) => {
    switch (action.type) {
        case RECEIPTS_PORTION_PLUS:
            let newPlusPortions = ++state.portions;
            let thePortionPlus = changeStorage('portion', newPlusPortions);
            return {
                ...state,
                portions: thePortionPlus,
            }
        case RECEIPTS_PORTION_MINUS:
            let newMinusPortions = (state.portions === 1) ? state.portions : --state.portions;
            let thePortionMinus = changeStorage('portion', newMinusPortions);
            return {
                ...state,
                portions: thePortionMinus,
            }
        case RECEIPTS_REQUEST:
            return {
                ...state,
                isFetching: true,
                items: initialState,
                portions: initialStatePortion
            }
        case RECEIPTS_RECEIVED:
            let thePortion = getStorage('portion', action.payload.portions);

            return {
                ...state,
                isFetching: false,
                items: action.payload,
                portions: thePortion
            }
        default:
            return state;
    }
}