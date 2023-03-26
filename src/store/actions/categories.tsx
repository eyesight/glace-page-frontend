import axios from 'axios';

/*
 * Action Type Constants
 */
export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_REQUEST_ONE = 'CATEGORIES_REQUEST_ONE';
export const CATEGORY_SELECT = 'CATEGORY_SELECT';
export const CATEGORIES_RECEIVED_ONE = 'CATEGORIES_RECEIVED_ONE';

/*
 * Action Creators
 */
export const requestCategories = (categories: ICategories) => ({
	type: CATEGORIES_REQUEST,
	payload: categories,
});

export const requestOneCategory = (category: CategoryType | any) => ({
	type: CATEGORIES_REQUEST_ONE,
	payload: category,
});

export const receiveCategories = (categories: ICategories) => ({
	type: CATEGORIES_RECEIVED,
	payload: categories,
});

export const receiveOneCategory = (category: CategoryType | any) => ({
	type: CATEGORIES_RECEIVED_ONE,
	payload: category,
});

export const selectCategories = (category: string) => ({
	type: CATEGORY_SELECT,
	payload: category,
});

/*
 * Thunk Actions
 */

export const fetchCategories =
	(url: string, categories: ICategories) => (dispatch: DispatchType) => {
		dispatch(requestCategories(categories));
		const sendGetRequest = async () => {
			try {
				const response = await axios.get(url);
				dispatch(receiveCategories(response.data));
			} catch (err) {
				// Handle Error TODO
				console.error(err);
			} finally {
				console.log('finally');
			}
		};
		return sendGetRequest();
	};

export const fetchOneCategory =
	(url: string, category: CategoryType) => (dispatch: DispatchType) => {
		dispatch(requestOneCategory(category));
		const sendGetRequest = async () => {
			try {
				const response = await axios.get(url);
				dispatch(receiveOneCategory(response.data));
			} catch (err) {
				// Handle Error TODO
				console.error(err);
			} finally {
				console.log('finally');
			}
		};
		return sendGetRequest();
	};

// export const setCategoryAsFilter = (categorySelected: string, url: string) => (dispatch: DispatchType) => {
//     dispatch(selectCategories(categorySelected));
//     // const query = `?${QueryCategory}[0]=${item}`;
//     // const theUrl = url + query;
//     // dispatch(fetchReceipts(theUrl, receipts));
// }
