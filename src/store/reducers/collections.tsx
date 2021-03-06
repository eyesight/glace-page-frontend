import {
    COLLECTION_RECEIVED,
    COLLECTION_REQUEST,
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
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                item: getTheItem
            }

        default:
            return state;
    }
}