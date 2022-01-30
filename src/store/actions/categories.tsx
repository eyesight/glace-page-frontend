import axios from 'axios';

/*
 * Action Type Constants
 */
export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORY_SELECT = 'CATEGORY_SELECT';


/*
 * Action Creators
 */
export const requestCategories = (categories: ICategories) => ({
    type: CATEGORIES_REQUEST,
    payload: categories
});

export const receiveCategories = (categories: ICategories) => ({
    type: CATEGORIES_RECEIVED,
    payload: categories
});

export const selectCategories = (category: number) => ({
    type: CATEGORY_SELECT,
    payload: category
});

/*
 * Thunk Actions
 */

export const fetchCategories = (url: string, categories: ICategories) => (dispatch: DispatchType) => {
    console.log(categories);
    dispatch(requestCategories(categories))
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
    }
    return sendGetRequest();
}

export const setCategoryAsFilter = (categorySelected: number, url: string) => (dispatch: DispatchType) => {
    // const item = dispatch(selectCategories(categorySelected))?.payload;
    // const query = `?${QueryCategory}[0]=${item}`;
    // const theUrl = url + query;
    // dispatch(fetchReceipts(theUrl, receipts));
}