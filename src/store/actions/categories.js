import axios from 'axios';

/*
 * Action Type Constants
 */
export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';


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
