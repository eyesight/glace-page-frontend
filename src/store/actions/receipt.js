import axios from 'axios';
import { RouteReceipt } from '../../helper/constants/routes';

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

export const fetchReceipts = (url, receipts) => (dispatch) => {
    dispatch(requestReceipts(receipts))
    axios.get(url)
        .then(response => {
            dispatch(receiveReceipts(response.data));
        })
        .catch(err => console.log(err));
}
