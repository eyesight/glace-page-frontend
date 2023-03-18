import {
	CATEGORIES_RECEIVED,
	CATEGORIES_REQUEST,
	CATEGORY_SELECT,
	CATEGORIES_RECEIVED_ONE,
} from '../actions/categories';

export const initialState: ICategories = {
	isFetching: false,
	items: [],
	selectedItem: '',
	selectedCategory: {} as CategoryType[],
};

export const categories = (state: ICategories = initialState, action: CategoryAction) => {
	switch (action.type) {
		case CATEGORIES_REQUEST:
			return {
				...state,
				isFetching: true,
				items: initialState.items,
			};

		case CATEGORIES_RECEIVED:
			let getAllItems = action.payload;

			return {
				...state,
				isFetching: false,
				items: getAllItems,
			};

		case CATEGORIES_RECEIVED_ONE:
			return {
				...state,
				selectedCategory: action.payload,
			};

		case CATEGORY_SELECT:
			return {
				...state,
				selectedItem: action.payload,
			};

		default:
			return state;
	}
};
