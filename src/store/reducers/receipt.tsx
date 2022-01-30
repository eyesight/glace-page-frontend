import { getRandomElements } from '../../helper/constants/getRandomElements';
import { getURLSearchParam, changeURLSearchParam } from '../../helper/constants/urlSearchParamsFunction';
import { ReceiptModel } from '../../helper/models';
import {
    RECEIPTS_RECEIVED,
    RECEIPTS_ONE_RECEIVED,
    RECEIPTS_REQUEST,
    RECEIPTS_PORTION_PLUS,
    RECEIPTS_PORTION_MINUS,
    RECEIPT_RANDOM,
    SEARCH,
    SEARCH_ENTER
} from '../actions/receipt';

export const initialState: IReceipt = {
    isFetching: false,
    items: [],
    oneItem: {} as RezeptType,
    portions: 0,
    filteredItems: [],
    value: '',
    filterText: '',
    randomItems: []
};

export const receipt = (state: IReceipt = initialState, action: ReceiptAction) => {
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
                portions: initialState.portions,
                filterText: initialState.filterText,
                items: initialState.items
            }

        case RECEIPTS_RECEIVED:
            let getAllItems = action.payload;
            let theReceiptsFilteredBySearchParamSearch = getURLSearchParam('s', state.filterText, '') ? getURLSearchParam('s', state.filterText, '') : state.filterText;
            let theReceiptsFilteredBySearchParamFilter = getURLSearchParam('filter', state.filterText, '') ? getURLSearchParam('filter', state.filterText, '') : '';

            //when portion-filter is set; when more than one portion is set in SearchParams, then the Item is not an array; its a single item -> when detail page is loaded
            // const initialFilteredReceiptsCat = !(thePortion > 0) && theReceiptsFilteredBySearchParamFilter !== '' ? getAllItems.filter((allReceipts) => {
            //     console.log(allReceipts);
            //     const element = allReceipts?.categories?.filter((item: any) => {
            //         return item.id === parseInt(theReceiptsFilteredBySearchParamFilter)
            //     });
            //     return (element.length > 0) ?? allReceipts;
            // }) : getAllItems;

            // const initialFilteredReceipts = !(thePortion > 0) ? initialFilteredReceiptsCat.filter((val) => {
            //     const title = val.title.toLowerCase();
            //     return title.includes(theReceiptsFilteredBySearchParamSearch)
            // }) : initialFilteredReceiptsCat;

            return {
                ...state,
                isFetching: false,
                filteredItems: getAllItems,
                items: getAllItems
            }

        case RECEIPTS_ONE_RECEIVED:
            let oneItem = action.payload;
            let thePortion = Number(getURLSearchParam('portion', state.portions, 'receipt')) ? Number(getURLSearchParam('portion', state.portions, 'receipt')) : initialState.portions;

            return {
                ...state,
                isFetching: false,
                portions: thePortion,
                oneItem: oneItem
            }

        case RECEIPT_RANDOM:
            let allItemsNormal = state.items;
            const allItemsRandomizedAgain = allItemsNormal.length > 0 ? getRandomElements(allItemsNormal, 10) : allItemsNormal;

            return {
                ...state,
                randomItems: allItemsRandomizedAgain,
            }

        case SEARCH: {
            const value = (typeof action.payload === 'string') ? action.payload : '';
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
