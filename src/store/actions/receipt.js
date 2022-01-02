import axios from 'axios';

/*
 * Action Type Constants
 */
export const RECEIPTS_RECEIVED = 'RECEIPTS_RECEIVED';
export const RECEIPTS_REQUEST = 'RECEIPTS_REQUEST';
export const RECEIPTS_PORTION_PLUS = 'RECEIPTS_PORTION_PLUS';
export const RECEIPTS_PORTION_MINUS = 'RECEIPTS_PORTION_MINUS';


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
});

export const receiptPlusPortion = (receipts) => ({
    type: RECEIPTS_PORTION_PLUS,
    payload: receipts
});

export const receiptMinusPortion = (receipts) => ({
    type: RECEIPTS_PORTION_MINUS,
    payload: receipts
});

/*
 * Thunk Actions
 */

export const fetchReceipts = (url, receipts) => (dispatch) => {
    dispatch(requestReceipts(receipts))
    const sendGetRequest = async () => {
        try {
            const response = await axios.get(url)
            dispatch(receiveReceipts(response.data));

        } catch (err) {
            // Handle Error TODO
            console.error(err);
        }
    }

    return sendGetRequest();
}
