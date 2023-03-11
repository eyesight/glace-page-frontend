import axios from 'axios';
import { getStorage } from '../../helper/constants/storageFunction';

/*
 * Action Type Constants
 */
export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_RECEIVED = 'LIKE_RECEIVED';
export const ADD_LIKE = 'ADD_LIKE';

/*
 * Action Creators
 */
export const requestLikes = (likes: ILike | any) => ({
    type: LIKE_REQUEST,
    payload: likes
});

export const receiveLikes = (likes: ILike) => ({
    type: LIKE_RECEIVED,
    payload: likes
});

export const addedLike = (like: ILike) => ({
    type: ADD_LIKE,
    payload: like
});

/*
 * Thunk Actions
 */

export const fetchLikes = (url: string, likes = {}) => (dispatch: DispatchType) => {
    dispatch(requestLikes(likes))
    const sendGetRequest = async () => {
        try {
            const response = await axios.get(url);
            dispatch(receiveLikes(response.data));
        } catch (err) {
            // Handle Error TODO
            console.error(err);
        } finally {
            console.log('finally');
        }
    }

    return sendGetRequest();
}

export const addLike = (url: string, likeItem: any, likeReceipt: any)  => (dispatch: DispatchType) => {
    let element = {
        "collections": [
            likeItem
        ],
        "receipts": [
            likeReceipt
        ],
        "receiptId": likeReceipt?.id.toString(),
        "collectionId": likeItem?.id.toString(),
        "liker": getStorage("user")
      }


    const sendPostRequest = async () => {
        try {
            const response = await axios.post(url, {...element} );
            const x = dispatch(addedLike(response.data));
            return x;
        } catch (err) {
            // Handle Error TODO
            console.error(err);
        } finally {
            console.log('finally');
        }
    }

    return sendPostRequest();
}