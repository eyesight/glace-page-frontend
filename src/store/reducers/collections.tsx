import { changeStorage, getStorage } from '../../helper/constants/storageFunction';
import {
    COLLECTION_RECEIVED,
    COLLECTION_REQUEST,
    COLLECTION_UPDATE_INPUT,
    COLLECTION_CHECK_STORAGE
} from '../actions/collection';

//TODO: is data really needed?
export const initialState: ICollections = {
    item: {} as CollectionType,
    data: {} as CollectionType,
    isFetching: false,
    isRegistered: false,
    input: "",
    isAccessed: false
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
            let getTheItem = action.payload.data;
            return {
                ...state,
                isFetching: false,
                item: getTheItem
            }

        case COLLECTION_UPDATE_INPUT:
            const isPW = action.payload?.secret === state.pw;
            const isName = state.item.attributes.likers?.data.find((item: LikersType) => item.attributes.name === action.payload?.name);
            if(isPW  && action.payload.name && isName) {
                changeStorage('user', action.payload.name);
            }

            return {
                ...state,
                input: action.payload,
                isAccessed: isPW && isName
            }
        case COLLECTION_CHECK_STORAGE:
            const itemOfstorage = getStorage("user");
            const isRegistered = !!itemOfstorage;
            const isUserName = state.item.attributes.likers?.data.find((item: LikersType) => {
                return item.attributes.name === itemOfstorage
            });
            return {
                ...state,
                isAccessed: isUserName && isRegistered
            }
    
        default:
            return state;
    }
}