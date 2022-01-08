import {
    CURSOR_ENTER,
    CURSOR_LEAVE,
    CURSOR_DETECT
} from '../actions/cursor';

export const initialState = false;
export const initialStatePos = 0;

export const cursor = (state = {
    isOnElement: initialState,
    cursorPosition: initialStatePos
}, action) => {
    switch (action.type) {
        case CURSOR_ENTER:
            return {
                ...state,
                isOnElement: true,
            }
        case CURSOR_LEAVE:
            return {
                ...state,
                isOnElement: false,
            }
        case CURSOR_DETECT:
            return {
                ...state,
                cursorPosition: action.payload
            }
        default:
            return state;
    }
}