import { getRandomElements } from '../../helper/constants/getRandomElements';
import { getURLSearchParam, changeURLSearchParam } from '../../helper/constants/urlSearchParamsFunction';
import {
    RECEIPTS_RECEIVED,
    RECEIPTS_ONE_RECEIVED,
    RECEIPTS_REQUEST,
    RECEIPTS_PORTION_PLUS,
    RECEIPTS_PORTION_MINUS,
    RECEIPT_RANDOM,
    SEARCH,
    SEARCH_ENTER,
    SEARCH_RESET
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
            let newPlusPortionString = newPlusPortions.toString();
            let thePortionPlus = Number(changeURLSearchParam('portion', newPlusPortionString, 'receipt'));
            return {
                ...state,
                portions: thePortionPlus,
            }

        case RECEIPTS_PORTION_MINUS:
            let newMinusPortions = (state.portions === 1) ? state.portions : --state.portions;
            let newMinusPortionsString = newMinusPortions.toString();
            let thePortionMinus = Number(changeURLSearchParam('portion', newMinusPortionsString, 'receipt'));
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
            // let theReceiptsFilteredBySearchParamSearch = getURLSearchParam('s', state.filterText, '') ? getURLSearchParam('s', state.filterText, '') : state.filterText;
            // let theReceiptsFilteredBySearchParamFilter = getURLSearchParam('filter', state.filterText, '') ? getURLSearchParam('filter', state.filterText, '') : '';

            // const initialFilteredReceiptsCat = theReceiptsFilteredBySearchParamFilter !== '' ? getAllItems.filter((allReceipts) => {
            //     console.log(allReceipts);
            //     const element = allReceipts?.categories?.filter((item: any) => {
            //         return item.id === parseInt(theReceiptsFilteredBySearchParamFilter)
            //     });
            //     return (element.length > 0) ?? allReceipts;
            // }) : getAllItems;

            // const initialFilteredReceipts = initialFilteredReceiptsCat.filter((val: any) => {
            //     const title = val.title.toLowerCase();
            //     return title.includes(theReceiptsFilteredBySearchParamSearch)
            // });

            return {
                ...state,
                isFetching: false,
                filteredItems: getAllItems,
                items: getAllItems
            }

        case RECEIPTS_ONE_RECEIVED:
            let oneItem = action.payload;
            let portionString = state.portions.toString();
            let thePortion = Number(getURLSearchParam('portion', portionString, 'receipt')) ? Number(getURLSearchParam('portion', portionString, 'receipt')) : oneItem.portions;

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
            const searchValue = (typeof action.payload === 'string') ? action.payload : '';
            changeURLSearchParam('s', searchValue, '');
            return {
                ...state,
                filterText: searchValue
            };
        }

        case SEARCH_RESET: {
            const searchValueReset = (typeof action.payload === 'string') ? action.payload : '';
            changeURLSearchParam('s', searchValueReset, '');
            return {
                ...state,
                filterText: searchValueReset
            };
        }

        default:
            return state;
    }
}
