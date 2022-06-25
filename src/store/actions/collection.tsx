import axios from 'axios';
import { StringLiteralType } from 'typescript';

/*
 * Action Type Constants
 */
export const COLLECTION_RECEIVED = 'COLLECTION_RECEIVED';
export const COLLECTION_REQUEST = 'COLLECTION_REQUEST';
export const COLLECTION_ADD_LIKE = 'COLLECTION_ADD_LIKE';


/*
 * Action Creators
 */
export const requestCollections = (collections: ICollections | any) => ({
    type: COLLECTION_REQUEST,
    payload: collections
});

export const receiveCollections = (collections: ICollections) => ({
    type: COLLECTION_RECEIVED,
    payload: collections
});

export const addedLike = (like: ILike) => ({
    type: COLLECTION_ADD_LIKE,
    payload: like
});

/*
 * Thunk Actions
 */

export const fetchCollections = (url: string, collection = {}) => (dispatch: DispatchType) => {
    dispatch(requestCollections(collection))
    const sendGetRequest = async () => {
        try {
            const response = await axios.get(url);
            dispatch(receiveCollections(response.data));
        } catch (err) {
            // Handle Error TODO
            console.error(err);
        } finally {
            console.log('finally');
        }
    }

    return sendGetRequest();
}

export const addLike = (url: string, likeItem: ICollections, likeReceipt: RezeptType | undefined)  => (dispatch: DispatchType) => {
    let element = {
        "collections": [
            likeItem.item
        ],
        "receipts": [
            likeReceipt
        ],
        "liker": {
                "name": "claudiaT",
                "email": null
            }
      }
    const sendPostRequest = async () => {
        try {
            await axios.post(url, element );
        } catch (err) {
            // Handle Error TODO
            console.error(err);
        } finally {
            console.log('finally');
        }
    }

    return sendPostRequest();
}

// const handlePromiseErrorAsNull = async (theRequestPromise) => {
//     try {
//         return await theRequestPromise;
//     } catch (error) {
//         return null;
//     }
// };