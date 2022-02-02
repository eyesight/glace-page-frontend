import axios from 'axios';

/*
 * Action Type Constants
 */
export const RECEIPTS_RECEIVED = 'RECEIPTS_RECEIVED';
export const RECEIPTS_ONE_RECEIVED = 'RECEIPTS_ONE_RECEIVED';
export const RECEIPTS_REQUEST = 'RECEIPTS_REQUEST';
export const RECEIPTS_PORTION_PLUS = 'RECEIPTS_PORTION_PLUS';
export const RECEIPTS_PORTION_MINUS = 'RECEIPTS_PORTION_MINUS';
export const RECEIPT_RANDOM = 'RECEIPT_RANDOM';
export const SEARCH = 'SEARCH';
export const SEARCH_ENTER = 'SEARCH_ENTER';
export const SEARCH_RESET = 'SEARCH_RESET';


/*
 * Action Creators
 */
export const requestReceipts = (receipts: IReceipt | any) => ({
    type: RECEIPTS_REQUEST,
    payload: receipts
});

export const receiveReceipts = (receipts: IReceipt) => ({
    type: RECEIPTS_RECEIVED,
    payload: receipts
});

export const receiveOneReceipts = (receipt: IReceipt) => ({
    type: RECEIPTS_ONE_RECEIVED,
    payload: receipt
});

export const receiptPlusPortion = (portion: number) => ({
    type: RECEIPTS_PORTION_PLUS,
    payload: portion
});

export const receiptMinusPortion = (portion: number) => ({
    type: RECEIPTS_PORTION_MINUS,
    payload: portion
});

export const receiptRandomized = (receipts: IReceipt | any) => ({
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

export const resetEntered = (value: string) => ({
    type: SEARCH_RESET,
    payload: value
});

/*
 * Thunk Actions
 */

export const fetchRandomReceipts = (url: string, receipts = {}) => (dispatch: DispatchType) => {
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

export const fetchReceipts = (url: string, receipts = {}) => (dispatch: DispatchType) => {
    dispatch(requestReceipts(receipts))
    const sendGetRequest = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data.length);
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

export const fetchOneReceipts = (url: string, receipt = {}) => (dispatch: DispatchType) => {
    dispatch(requestReceipts(receipt))
    const sendGetRequest = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data.length);
            dispatch(receiveOneReceipts(response.data));
        } catch (err) {
            // Handle Error TODO
            console.error(err);
        } finally {
            console.log('finally');
        }
    }

    return sendGetRequest();
}