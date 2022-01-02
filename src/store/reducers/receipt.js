import { getStorage, changeStorage } from '../../helper/constants/storageFunction';
import { getURLSearchParam, changeURLSearchParam, insertParam } from '../../helper/constants/urlSearchParamsFunction';
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
            let thePortionPlus = Number(changeURLSearchParam('portion', newPlusPortions));
            return {
                ...state,
                portions: thePortionPlus,
            }
        case RECEIPTS_PORTION_MINUS:
            let newMinusPortions = (state.portions === 1) ? state.portions : --state.portions;
            let thePortionMinus = Number(changeURLSearchParam('portion', newMinusPortions));
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
            let thePortion = Number(getURLSearchParam('portion', action.payload.portions));
            console.log(thePortion);
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