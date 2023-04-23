import {
    LIKE_RECEIVED,
    LIKE_REQUEST,
    ADD_LIKE,
    REMOVE_LIKE
} from '../actions/likes';

export const initialState: ILike = {
    item: {} as LikeType [],
    data: {} as LikeType [],
};

export const likes = (state: ILike = initialState, action: LikeAction) => {
    switch (action.type) {
        case LIKE_REQUEST:
            return {
                ...state,
                item: initialState.item
            }

        case LIKE_RECEIVED:
            return {
                ...state,
                item: action.payload.data
            }

        case ADD_LIKE:
            return {
                ...state,
                data: action.payload.data
            }
        case REMOVE_LIKE:
            return {
                ...state,
                data: action.payload.data
            }

        default:
            return state;
    }
}