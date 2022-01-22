import { changeURLSearchParam } from '../../helper/constants/urlSearchParamsFunction';
import {
    CATEGORIES_RECEIVED,
    CATEGORIES_REQUEST,
    CATEGORY_SELECT
} from '../actions/categories';

export const initialState = [];
export const initialSelectedItem = '';

export const categories = (state = {
    isFetching: false,
    items: initialState,
    selectedItem: initialSelectedItem
}, action) => {
    switch (action.type) {
        case CATEGORIES_REQUEST:
            return {
                ...state,
                isFetching: true,
                items: initialState
            }

        case CATEGORIES_RECEIVED:
            let getAllItems = action.payload;

            return {
                ...state,
                isFetching: false,
                items: getAllItems
            }

        case CATEGORY_SELECT:
            changeURLSearchParam('filter', action.payload, '');
            return {
                ...state,
                selectedItem: action.payload
            }

        default:
            return state;
    }
}