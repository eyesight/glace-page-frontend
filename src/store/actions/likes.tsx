import axios from 'axios';
import { getStorage } from '../../helper/constants/storageFunction';
import { RouteLikes } from '../../helper/constants/routes';

/*
 * Action Type Constants
 */
export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_RECEIVED = 'LIKE_RECEIVED';
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const LIKE_FAILED = 'LIKE_FAILED';

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

export const failedRequestLikes = (error: any) => ({
	type: LIKE_FAILED,
	payload: error,
});

export const addedLike = (like: ILike) => ({
	type: ADD_LIKE,
	payload: like,
});

export const removedLike = (like: ILike) => ({
	type: REMOVE_LIKE,
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
		dispatch(failedRequestLikes(err));
		console.error(err);
	} finally {
		console.log('finally');
	}
};

export const addLike =
	(url: string, likeItem: any, likeReceipt: any) => async (dispatch: DispatchType) => {
		const element = {
			data: {
				collections: {
					connect: [likeItem?.id],
				},
				receipts: {
					connect: [likeReceipt?.id],
				},
				receiptId: likeReceipt?.id.toString(),
				collectionId: likeItem?.id.toString(),
				liker: getStorage('user'),
			},
		};

		try {
			const response = await axios.post(url, { ...element });
			dispatch(addedLike(response.data));
		} catch (err) {
			// Handle Error TODO
			dispatch(failedRequestLikes(err));
			console.error(err);
		} finally {
			console.log('finally');
		}
	};

	//todo optimize this code
	export const removeLike = (url: string, likeReceipt: any) => async (dispatch: DispatchType) => {
		try {
			const finalUrl = `${url}&filters[receipts][id][$eq]=${likeReceipt.id}&filters[liker][$eq]=${getStorage('user')}`;
			
			const response = await axios.get(finalUrl);
			const lastPost = response.data.data.length - 1;
			const deletingId = response.data.data[lastPost].id;
			
			if (!deletingId) {
				console.error(`No item found with criteria: ${finalUrl}`);
				return;
			}
			
			const deletingResponse = await axios.delete(`${RouteLikes}/${deletingId}`);
		  dispatch(removedLike(deletingResponse.data));
		} catch (err) {
		  dispatch(failedRequestLikes(err));
		  console.error(err);
		} finally {
		  console.log('finally');
		}
	  };
