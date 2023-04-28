import {
    LIKE_RECEIVED,
    LIKE_REQUEST,
    LIKE_FAILED,
    ADD_LIKE,
    REMOVE_LIKE
} from '../actions/likes';

export const initialState: ILike = {
    item: {} as LikeType [],
    data: {} as LikeType [],
    isFetching: true,
    error: {}
};

export const likes = (state: ILike = initialState, action: LikeAction) => {
    switch (action.type) {
        case LIKE_REQUEST:
            return {
                ...state,
                item: initialState.item,
                isFetching: true
            }

        case LIKE_RECEIVED:
            return {
                ...state,
                item: action.payload.data,
                isFetching: false
            }
        
        case LIKE_FAILED:
            return {
                ...state,
                error: action.payload.data,
                isFetching: false
            }

        case ADD_LIKE:
            return {
                ...state,
                data: action.payload.data,
                isFetching: false
            }
        case REMOVE_LIKE:
            return {
                ...state,
                data: action.payload.data,
                isFetching: false
            }

        default:
            return state;
    }
}