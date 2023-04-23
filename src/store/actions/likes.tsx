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
	payload: likes,
});

export const receiveLikes = (likes: ILike) => ({
	type: LIKE_RECEIVED,
	payload: likes,
});

export const addedLike = (like: ILike) => ({
	type: ADD_LIKE,
	payload: like,
});

/*
 * Thunk Actions
 */

export const fetchLikes = (url: string) => async (dispatch: DispatchType) => {
	dispatch(requestLikes({}));
	try {
	  const response = await axios.get(url);
	  dispatch(receiveLikes(response.data));
	} catch (err) {
	  // Handle Error TODO
	  console.error(err);
	} finally {
	  console.log('finally');
	}
  };

	export const addLike = (url: string, likeItem: any, likeReceipt: any) => async (dispatch: DispatchType) => {
		const element = {
		  "data": {
			"collections": {
			  "connect": [likeItem?.id],
			},
			"receipts": {
			  "connect": [likeReceipt?.id],
			},
			"receiptId": likeReceipt?.id.toString(),
			"collectionId": likeItem?.id.toString(),
			"liker": getStorage('user'),
		  },
		};
	  
		try {
		  const response = await axios.post(url, { ...element });
		  dispatch(addedLike(response.data));
		} catch (err) {
		  // Handle Error TODO
		  console.error(err);
		} finally {
		  console.log('finally');
		}
	  };