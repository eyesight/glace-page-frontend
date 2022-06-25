import {
    COLLECTION_RECEIVED,
    COLLECTION_REQUEST,
    COLLECTION_ADD_LIKE
} from '../actions/collection';

export const initialState: ICollections = {
    item: {} as CollectionType,
    isFetching: false
};

export const collections = (state: ICollections = initialState, action: CollectionAction) => {
    switch (action.type) {
        case COLLECTION_REQUEST:
            return {
                ...state,
                isFetching: true,
                item: initialState.item
            }

        case COLLECTION_RECEIVED:
            let getTheItem = action.payload;

            return {
                ...state,
                isFetching: false,
                item: getTheItem
            }

        case COLLECTION_ADD_LIKE:
            return action.payload

        default:
            return state;
    }
}