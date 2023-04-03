import { getRandomElements } from '../../helper/constants/getRandomElements';
import {
	getURLSearchParam,
	changeURLSearchParam,
} from '../../helper/constants/urlSearchParamsFunction';
import {
	RECEIPTS_RECEIVED,
	RECEIPTS_ONE_RECEIVED,
	RECEIPTS_REQUEST,
	RECEIPTS_PORTION_PLUS,
	RECEIPTS_PORTION_MINUS,
	RECEIPT_RANDOM,
	SEARCH,
	SEARCH_ENTER,
	SEARCH_RESET,
} from '../actions/receipt';

export const initialState: IReceipt = {
	isFetching: false,
	data: {} as RezeptType,
	items: [],
	oneItem: {} as RezeptType,
	portions: 0,
	filteredItems: [],
	value: '',
	filterText: '',
	randomItems: [],
};

//TODO: check if type needs to be rewritten to have data and meta for the pagination

export const receipt = (state: IReceipt = initialState, action: ReceiptAction) => {
	switch (action.type) {
		case RECEIPTS_PORTION_PLUS:
			let newPlusPortions = ++state.portions;
			let newPlusPortionString = newPlusPortions.toString();
			let thePortionPlus = Number(changeURLSearchParam('portion', newPlusPortionString, 'receipt'));
			return {
				...state,
				portions: thePortionPlus,
			};

		case RECEIPTS_PORTION_MINUS:
			let newMinusPortions = state.portions === 1 ? state.portions : --state.portions;
			let newMinusPortionsString = newMinusPortions.toString();
			let thePortionMinus = Number(
				changeURLSearchParam('portion', newMinusPortionsString, 'receipt')
			);
			return {
				...state,
				portions: thePortionMinus,
			};

		case RECEIPTS_REQUEST:
			return {
				...state,
				isFetching: true,
				portions: initialState.portions,
				filterText: initialState.filterText,
				items: initialState.items,
			};

		case RECEIPTS_RECEIVED:
			let getAllItems = action.payload;
			return {
				...state,
				isFetching: false,
				filteredItems: getAllItems.data,
				items: getAllItems.data,
			};

		case RECEIPTS_ONE_RECEIVED:
			let oneItem = action.payload;
			let portionString = state.portions.toString();
			let thePortion = Number(getURLSearchParam('portion', portionString, 'receipt'))
				? Number(getURLSearchParam('portion', portionString, 'receipt'))
				: oneItem.data.attributes.portions;

			return {
				...state,
				isFetching: false,
				portions: thePortion,
				oneItem: oneItem.data,
			};

		case RECEIPT_RANDOM:
			const allItemsNormal = state.items;
			const allItemsNormalLength = allItemsNormal?.length || 0;
			const allItemsRandomizedAgain = (allItemsNormal && allItemsNormalLength > 0) ? getRandomElements(allItemsNormal, 10) : allItemsNormal;

			return {
				...state,
				randomItems: allItemsRandomizedAgain,
			};

		case SEARCH: {
			const value = typeof action.payload === 'string' ? action.payload : '';
			const allItems = state.items;
			const filteredReceipts = allItems.filter((val) => {
				const title = val.attributes.title.toLowerCase();
				return title.includes(value.toLowerCase());
			});
			changeURLSearchParam('s', value, '');
			return {
				...state,
				value,
				filteredItems: filteredReceipts,
			};
		}

		case SEARCH_ENTER: {
			const searchValue = typeof action.payload === 'string' ? action.payload : '';
			changeURLSearchParam('s', searchValue, '');
			return {
				...state,
				filterText: searchValue,
			};
		}

		case SEARCH_RESET: {
			const searchValueReset = typeof action.payload === 'string' ? action.payload : '';
			changeURLSearchParam('s', searchValueReset, '');
			return {
				...state,
				filterText: searchValueReset,
			};
		}

		default:
			return state;
	}
};
