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
            let getAllItems = action.payload;
            let thePortion = Number(getURLSearchParam('portion', action.payload.portions, 'receipt')) ? Number(getURLSearchParam('portion', action.payload.portions, 'receipt')) : initialStatePortion;
            let theReceiptsFilteredBySearchParamSearch = getURLSearchParam('s', state.filterText, '') ? getURLSearchParam('s', state.filterText, '') : state.filterText;
            let theReceiptsFilteredBySearchParamFilter = getURLSearchParam('filter', state.filterText, '') ? getURLSearchParam('filter', state.filterText, '') : '';

            //when portion-filter is set; when more than one portion is set in SearchParams, then the Item is not an array; its a single item -> when detail page is loaded
            const initialFilteredReceiptsCat = !thePortion > 0 && theReceiptsFilteredBySearchParamFilter !== '' ? getAllItems.filter((allReceipts) => {
                const element = allReceipts?.categories?.filter((item) => {
                    return item?.id === parseInt(theReceiptsFilteredBySearchParamFilter)
                });
                return (element.length > 0) ?? allReceipts;
            }) : getAllItems;

            const initialFilteredReceipts = !thePortion > 0 ? initialFilteredReceiptsCat.filter((val) => {
                const title = val.title.toLowerCase();
                return title.includes(theReceiptsFilteredBySearchParamSearch)
            }) : initialFilteredReceiptsCat;

            return {
                ...state,
                isFetching: false,
                filterText: theReceiptsFilteredBySearchParamSearch,
                filteredItems: initialFilteredReceipts,
                portions: thePortion,
                items: getAllItems
            }

        case RECEIPT_RANDOM:
            let allItemsNormal = state.items;
            const allItemsRandomizedAgain = allItemsNormal.length > 0 ? getRandomElements(allItemsNormal, 10) : allItemsNormal;

            return {
                ...state,
                randomItems: allItemsRandomizedAgain,
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


 // const filteredElements = all?.items?.filter((allReceipts) => {
    //     let element = allReceipts?.categories?.filter(item => item?.id === catID);
    //     return (element.length > 0) ?? allReceipts;
    // });
    // console.log(filteredElements);