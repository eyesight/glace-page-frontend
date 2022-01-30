/*
 * Action Type Constants
 */
export const CURSOR_ENTER = 'CURSOR_ENTER';
export const CURSOR_LEAVE = 'CURSOR_LEAVE';
export const CURSOR_DETECT = 'CURSOR_DETECT';



/*
 * Action Creators
 */
export const detectCursor = (cursor: CursorType) => ({
    type: CURSOR_DETECT,
    payload: cursor
});

export const enterCursor = (cursor: CursorType | boolean) => ({
    type: CURSOR_ENTER,
    payload: cursor
});

export const leaveCursor = (cursor: CursorType | boolean) => ({
    type: CURSOR_LEAVE,
    payload: cursor
});


