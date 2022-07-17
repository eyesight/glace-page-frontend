import axios from 'axios';

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

/*
 * Thunk Actions
 */

export const fetchCollections = (url: string, collection = {}) => (dispatch: DispatchType) => {
    console.log(url);
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