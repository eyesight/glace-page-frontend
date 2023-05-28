import axios from 'axios';
import { setTitle, stopLoading } from './loader';
import { loadingText } from '../../helper/constants/loadingText';

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
	payload: receipts,
});

export const receiveReceipts = (receipts: IReceipt) => ({
	type: RECEIPTS_RECEIVED,
	payload: receipts,
});

export const receiveOneReceipts = (receipt: IReceipt) => ({
	type: RECEIPTS_ONE_RECEIVED,
	payload: receipt,
});

export const receiptPlusPortion = (portion: number) => ({
	type: RECEIPTS_PORTION_PLUS,
	payload: portion,
});

export const receiptMinusPortion = (portion: number) => ({
	type: RECEIPTS_PORTION_MINUS,
	payload: portion,
});

export const receiptRandomized = (receipts: IReceipt | any) => ({
	type: RECEIPT_RANDOM,
	payload: receipts,
});

export const search = (value: string) => ({
	type: SEARCH,
	payload: value,
});

export const searchEntered = (value: string) => ({
	type: SEARCH_ENTER,
	payload: value,
});

export const resetEntered = (value: string) => ({
	type: SEARCH_RESET,
	payload: value,
});

/*
 * Thunk Actions
 */

export const fetchRandomReceipts =
	(url: string, receipts = {}) =>
	(dispatch: DispatchType) => {
		dispatch(requestReceipts(receipts));
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
		};

		return sendGetRequest();
	};

export const fetchReceipts =
	(url: string, receipts = {}) =>
	(dispatch: DispatchType) => {
		dispatch(requestReceipts(receipts));
		const sendGetRequest = async () => {
			try {
				const response = await axios.get(url);
				dispatch(receiveReceipts(response.data));
			} catch (err) {
				// Handle Error TODO
				console.error(err);
			} finally {
				//if we have the base-path we set a default title
				if (!url.includes('categories')) {
					dispatch(setTitle(loadingText));
				}
				dispatch(stopLoading(''));
			}
		};

		return sendGetRequest();
	};

export const fetchOneReceipts =
	(url: string, receipt = {}) =>
	(dispatch: DispatchType) => {
		dispatch(requestReceipts(receipt));
		let response: any;
		const sendGetRequest = async () => {
			try {
				response = await axios.get(url);
				dispatch(receiveOneReceipts(response.data));
			} catch (err) {
				// Handle Error TODO
				console.error(err);
			} finally {
				if (response && response.data && response.data.data) {
					dispatch(setTitle(response.data.data.attributes.title));
					dispatch(stopLoading(''));
				}
			}
		};

		return sendGetRequest();
	};
