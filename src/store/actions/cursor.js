
/*
 * Action Type Constants
 */
export const CURSOR_ENTER = 'CURSOR_ENTER';
export const CURSOR_LEAVE = 'CURSOR_LEAVE';
export const CURSOR_DETECT = 'CURSOR_DETECT';



/*
 * Action Creators
 */
export const detectCursor = (cursor) => ({
    type: CURSOR_DETECT,
    payload: cursor
});

export const enterCursor = (cursor) => ({
    type: CURSOR_ENTER,
    payload: cursor
});

export const leaveCursor = (cursor) => ({
    type: CURSOR_LEAVE,
    payload: cursor
});


