/*
 * Action Type Constants
 */
export const LOADING_FINISHED = 'LOADING_FINISHED';
export const SET_TITLE = 'SET_TITLE';

/*
 * Action Creators
 */

export const stopLoading = (loading: string) => ({
	type: LOADING_FINISHED,
	payload: loading,
});

export const setTitle = (title: string) => ({
	type: SET_TITLE,
	payload: title,
});
