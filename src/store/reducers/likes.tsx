import {
    LIKE_RECEIVED,
    LIKE_REQUEST,
    ADD_LIKE
} from '../actions/likes';

export const initialState: ILike = {
    item: {} as LikeType [],
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
                item: action.payload
            }

        case ADD_LIKE:
            return {
                ...state,
                item: action.payload
            }

        default:
            return state;
    }
}