import { changeURLSearchParam } from '../../helper/constants/urlSearchParamsFunction';
import {
    CATEGORIES_RECEIVED,
    CATEGORIES_REQUEST,
    CATEGORY_SELECT
} from '../actions/categories';

export const initialState: ICategories = {
    isFetching: false,
    items: [],
    selectedItem: ''
};

export const categories = (state: ICategories = initialState, action: CategoryAction) => {
    switch (action.type) {
        case CATEGORIES_REQUEST:
            return {
                ...state,
                isFetching: true,
                items: initialState.items
            }

        case CATEGORIES_RECEIVED:
            let getAllItems = action.payload;

            return {
                ...state,
                isFetching: false,
                items: getAllItems
            }

        case CATEGORY_SELECT:
            let catItemString = action.payload.toString();
            changeURLSearchParam('filter', catItemString, '');
            return {
                ...state,
                selectedItem: action.payload
            }

        default:
            return state;
    }
}