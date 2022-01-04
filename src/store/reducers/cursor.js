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
            let mousePos = { x: 0, y: 0 }
            mousePos.x = action.payload.clientX;
            mousePos.y = action.payload.clientY;
            return {
                ...state,
                cursorPosition: mousePos
            }
        default:
            return state;
    }
}