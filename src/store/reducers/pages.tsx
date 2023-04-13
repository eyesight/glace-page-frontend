import {
	PAGES_RECEIVED,
	PAGES_REQUEST,
	PAGES_REQUEST_ONE,
	PAGES_RECEIVED_ONE,
} from '../actions/pages';

export const initialState: IPages = {
	isFetching: false,
	items: [],
	selectedPage: {} as PageType
};

export const pages = (state: IPages = initialState, action: PageAction) => {
	switch (action.type) {
		case PAGES_REQUEST:
			return {
				...state,
				isFetching: true,
				items: initialState.data,
			};

		case PAGES_RECEIVED:
			let allPages = action.payload;

			return {
				...state,
				isFetching: false,
				items: allPages.data,
			};

		case PAGES_REQUEST_ONE:
			return {
				...state,
				isFetching: true,
				selectedPage: action.payload,
			};

		case PAGES_RECEIVED_ONE:
			return {
				...state,
				isFetching: false,
				selectedPage: action.payload.data[0],
			};

		default:
			return state;
	}
};
