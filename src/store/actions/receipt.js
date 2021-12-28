import axios from 'axios';

/*
 * Action Type Constants
 */
export const RECEIPTS_RECEIVED = 'RECEIPTS_RECEIVED';
export const RECEIPTS_REQUEST = 'RECEIPTS_REQUEST'


/*
 * Action Creators
 */
export const requestReceipts = (receipts) => ({
    type: RECEIPTS_REQUEST,
    payload: receipts
});

export const receiveReceipts = (receipts) => ({
    type: RECEIPTS_RECEIVED,
    payload: receipts
})

/*
 * Thunk Actions
 */

export const fetchReceipts = (receipts) => (dispatch) => {
    dispatch(requestReceipts(receipts))
    axios.get(`http://localhost:1337/rezepts`)
        .then(response => {
            dispatch(receiveReceipts(response.data));
        })
        .catch(err => console.log(err));
}
