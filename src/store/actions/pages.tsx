import axios from 'axios';

/*
 * Action Type Constants
 */
export const PAGES_RECEIVED = 'PAGES_RECEIVED';
export const PAGES_REQUEST = 'PAGES_REQUEST';
export const PAGES_REQUEST_ONE = 'PAGES_REQUEST_ONE';
export const PAGES_RECEIVED_ONE = 'PAGES_RECEIVED_ONE';

/*
 * Action Creators
 */
export const requestPages = (pages: IPages | any) => ({
	type: PAGES_REQUEST,
	payload: pages,
});

export const requestOnePage = (page: PageType | any) => ({
	type: PAGES_REQUEST_ONE,
	payload: page,
});

export const receivePages = (pages: IPages) => ({
	type: PAGES_RECEIVED,
	payload: pages,
});

export const receiveOnePage = (page: PageType | any) => ({
	type: PAGES_RECEIVED_ONE,
	payload: page,
});


/*
 * Thunk Actions
 */

export const fetchPages =
	(url: string, pages= {}) => (dispatch: DispatchType) => {
		dispatch(requestPages(pages));
		const sendGetRequest = async () => {
			try {
				const response = await axios.get(url);
				dispatch(receivePages(response.data));
			} catch (err) {
				// Handle Error TODO
				console.error(err);
			} finally {
				console.log('finally');
			}
		};
		return sendGetRequest();
	};

export const fetchOnePage =
	(url: string, page={}) => (dispatch: DispatchType) => {
		dispatch(requestOnePage(page));
		const sendGetRequest = async () => {
			try {
				const response = await axios.get(url);
				dispatch(receiveOnePage(response.data));
			} catch (err) {
				// Handle Error TODO
				console.error(err);
			} finally {
				console.log('finally');
			}
		};
		return sendGetRequest();
	};
