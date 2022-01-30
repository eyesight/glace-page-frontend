import {
    CURSOR_ENTER,
    CURSOR_LEAVE,
    CURSOR_DETECT
} from '../actions/cursor';

export const initialState: ICursor = {
    isOnElement: false,
    cursorPosition: {x: 0, y: 0, className: ''}
};

export const cursor = (state: ICursor = initialState, action: CursorAction) => {
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
                cursorPosition: action.payload,
            }
        default:
            return state;
    }
}