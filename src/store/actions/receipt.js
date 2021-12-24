import axios from 'axios';

/*
 * Action Type Constants
 */
export const RECEIPTS_FETCHED = 'RECEIPTS_FETCHED';


/*
 * Action Creators
 */
export const receiptFetched = (theReceipts) => ({
    type: RECEIPTS_FETCHED,
    payload: theReceipts
});

/*
 * Thunk Actions
 */
export const loadReceipts = () => (dispatch) =>
    axios.get(`http://localhost:1337/rezepts`)
        .then(response => {
            dispatch(receiptFetched(response.data));
        })
        .catch(err => console.log(err));