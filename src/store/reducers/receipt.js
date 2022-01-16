import { getRandomElements } from '../../helper/constants/getRandomElements';
import { getURLSearchParam, changeURLSearchParam } from '../../helper/constants/urlSearchParamsFunction';
import {
    RECEIPTS_RECEIVED,
    RECEIPTS_REQUEST,
    RECEIPTS_PORTION_PLUS,
    RECEIPTS_PORTION_MINUS,
    RECEIPT_RANDOM,
    SEARCH,
    SEARCH_ENTER
} from '../actions/receipt';

export const initialState = [];
export const initialStatePortion = 0;
export const initialContents = [];
export const initialValue = '';
export const initialFilter = '';
export const initialRandom = [];

export const receipt = (state = {
    isFetching: false,
    items: initialState,
    portions: initialStatePortion,
    filteredItems: initialState,
    value: initialValue,
    filterText: initialFilter,
    randomItems: initialRandom
}, action) => {
    switch (action.type) {
        case RECEIPTS_PORTION_PLUS:
            let newPlusPortions = ++state.portions;
            let thePortionPlus = Number(changeURLSearchParam('portion', newPlusPortions, 'receipt'));
            return {
                ...state,
                portions: thePortionPlus,
            }

        case RECEIPTS_PORTION_MINUS:
            let newMinusPortions = (state.portions === 1) ? state.portions : --state.portions;
            let thePortionMinus = Number(changeURLSearchParam('portion', newMinusPortions, 'receipt'));
            return {
                ...state,
                portions: thePortionMinus,
            }

        case RECEIPTS_REQUEST:
            return {
                ...state,
                isFetching: true,
                portions: initialStatePortion,
                filterText: initialFilter,
                items: initialState
            }

        case RECEIPTS_RECEIVED:
            let initialAllItems = action.payload;
            let thePortion = Number(getURLSearchParam('portion', action.payload.portions, 'receipt')) ? Number(getURLSearchParam('portion', action.payload.portions, 'receipt')) : initialStatePortion;
            let theReceiptsFilteredBySearchParam = getURLSearchParam('s', state.filterText, '') ? getURLSearchParam('s', state.filterText, '') : state.filterText;
            //when portion-filter is set; when more than one portion is set in SearchParams, then the Item is not an array; its a single item -> when detail page is loaded
            const initialFilteredReceipts = !thePortion > 0 ? initialAllItems.filter((val) => {
                const title = val.title.toLowerCase();
                return title.includes(theReceiptsFilteredBySearchParam)
            }) : initialAllItems;
            const allItem = initialAllItems.length > 0 ? initialAllItems.map((item) => item) : initialAllItems;
            const allItemsRandomized = initialAllItems.length > 0 ? getRandomElements(initialAllItems, 10) : initialRandom;

            return {
                ...state,
                isFetching: false,
                filterText: theReceiptsFilteredBySearchParam,
                filteredItems: initialFilteredReceipts,
                portions: thePortion,
                randomItems: allItemsRandomized,
                items: allItem
            }

        case SEARCH: {
            const value = action.payload;
            const allItems = state.items;
            const filteredReceipts = allItems.filter((val) => {
                const title = val.title.toLowerCase();
                return title.includes(value)
            });
            changeURLSearchParam('s', value, '');
            return {
                ...state,
                value,
                filteredItems: filteredReceipts
            };
        }

        case SEARCH_ENTER: {
            const searchValue = action.payload;
            changeURLSearchParam('s', searchValue, '');
            return {
                ...state,
                filterText: searchValue
            };
        }

        default:
            return state;
    }
}