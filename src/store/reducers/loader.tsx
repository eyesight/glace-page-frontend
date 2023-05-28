import { generateRandomId } from '../../helper/constants/generateRandomId';
import {
	LOADING_FINISHED,
	SET_TITLE
} from '../actions/loader';

export const initialState: ILOADER = {
	title: '',
	anikey: '',
};

export const loader = (state: ILOADER = initialState, action: LoaderAction) => {
	switch (action.type) {
		case LOADING_FINISHED:
			return {
				...state,
				anikey: generateRandomId(10)
			};
		case SET_TITLE:
			return {
				...state,
				title: action.payload,
			};

		default:
			return state;
	}
};
