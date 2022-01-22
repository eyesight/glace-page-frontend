import axios from 'axios';
import { QueryCategory } from '../../helper/constants/routes';
import { fetchReceipts } from './receipt';

/*
 * Action Type Constants
 */
export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORY_SELECT = 'CATEGORY_SELECT';


/*
 * Action Creators
 */
export const requestCategories = (categories) => ({
    type: CATEGORIES_REQUEST,
    payload: categories
});

export const receiveCategories = (categories) => ({
    type: CATEGORIES_RECEIVED,
    payload: categories
});

export const selectCategories = (category) => ({
    type: CATEGORY_SELECT,
    payload: category
});

/*
 * Thunk Actions
 */

export const fetchCategories = (url, categories) => (dispatch) => {
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

export const setCategoryAsFilter = (categorySelected, url) => (dispatch) => {
    const item = dispatch(selectCategories(categorySelected))?.payload;
    const query = `?${QueryCategory}[0]=${item}`;
    dispatch(fetchReceipts(url + query));
}