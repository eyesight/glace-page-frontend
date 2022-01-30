import axios from 'axios';

/*
 * Action Type Constants
 */
export const RECEIPTS_RECEIVED = 'RECEIPTS_RECEIVED';
export const RECEIPTS_REQUEST = 'RECEIPTS_REQUEST';
export const RECEIPTS_PORTION_PLUS = 'RECEIPTS_PORTION_PLUS';
export const RECEIPTS_PORTION_MINUS = 'RECEIPTS_PORTION_MINUS';
export const RECEIPT_RANDOM = 'RECEIPT_RANDOM';
export const SEARCH = 'SEARCH';
export const SEARCH_ENTER = 'SEARCH_ENTER';


/*
 * Action Creators
 */
export const requestReceipts = (receipts: IReceipt) => ({
    type: RECEIPTS_REQUEST,
    payload: receipts
});

export const receiveReceipts = (receipts: IReceipt) => ({
    type: RECEIPTS_RECEIVED,
    payload: receipts
});

export const receiptPlusPortion = (receipts: IReceipt) => ({
    type: RECEIPTS_PORTION_PLUS,
    payload: receipts
});

export const receiptMinusPortion = (receipts: IReceipt) => ({
    type: RECEIPTS_PORTION_MINUS,
    payload: receipts
});

export const receiptRandomized = (receipts: IReceipt) => ({
    type: RECEIPT_RANDOM,
    payload: receipts
});

export const search = (value: string) => ({
    type: SEARCH,
    payload: value
});

export const searchEntered = (value: string) => ({
    type: SEARCH_ENTER,
    payload: value
});

/*
 * Thunk Actions
 */

export const fetchRandomReceipts = (url: string, receipts: IReceipt) => (dispatch: DispatchType) => {
    dispatch(requestReceipts(receipts))
    const sendGetRequest = async () => {
        try {
            const response = await axios.get(url);
            dispatch(receiveReceipts(response.data));
            dispatch(receiptRandomized(response.data));
        } catch (err) {
            // Handle Error TODO
            console.error(err);
        } finally {
            console.log('finally');
        }
    }

    return sendGetRequest();
}

export const fetchReceipts = (url: string, receipts: IReceipt) => (dispatch: DispatchType) => {
    console.log(receipts);
    dispatch(requestReceipts(receipts))
    const sendGetRequest = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data);
            dispatch(receiveReceipts(response.data));
        } catch (err) {
            // Handle Error TODO
            console.error(err);
        } finally {
            console.log('finally');
        }
    }

    return sendGetRequest();
}