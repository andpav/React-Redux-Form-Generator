'use strict';

import * as ActionTypes from '../action/action-types';

const modalState = {
	isShowing: false,
	id: false,
};

export default (state = modalState, action) => {
	switch (action.type) {
		case ActionTypes.SHOW_MODAL:
			return Object.assign({}, modalState, {
				isShowing: action.payload.isShowing,
				id: action.payload.id || null,
			});
		case ActionTypes.HIDE_MODAL:
			return modalState;
		default:
			return state;
	}
};
