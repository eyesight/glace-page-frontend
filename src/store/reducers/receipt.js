import { getURLSearchParam, changeURLSearchParam } from '../../helper/constants/urlSearchParamsFunction';
import {
    RECEIPTS_RECEIVED,
    RECEIPTS_REQUEST,
    RECEIPTS_PORTION_PLUS,
    RECEIPTS_PORTION_MINUS,
    SEARCH
} from '../actions/receipt';

export const initialState = [];
export const initialStatePortion = 0;
export const initialContents = [];
export const initialValue = '';

export const receipt = (state = {
    isFetching: false,
    items: initialState,
    portions: initialStatePortion,
    filteredItems: initialState,
    value: initialValue,
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
            let thePortion = Number(getURLSearchParam('portion', action.payload.portions)) ? Number(getURLSearchParam('portion', action.payload.portions)) : initialStatePortion;
            return {
                ...state,
                isFetching: false,
                items: action.payload,
                filteredItems: action.payload,
                portions: thePortion
            }
        case SEARCH: {
            const value = action.payload;
            const allItems = state.items;
            const filteredReceipts = allItems.filter((val) => {
                const title = val.title.toLowerCase();
                return title.includes(value)
            });
            return {
                ...state,
                value,
                filteredItems: filteredReceipts
            };
        }
        default:
            return state;
    }
}