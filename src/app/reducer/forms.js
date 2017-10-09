'use strict';

import * as ActionTypes from '../action/action-types';
import { fromJS, Map } from 'immutable';

const formsState = Map();

export default (state = formsState, action) => {
	switch (action.type) {
		case ActionTypes.RECEIVE_FORMS:
			return fromJS(action.payload);
		case ActionTypes.ADD_FORM:
			return state.set(action.payload.id, fromJS(action.payload));
		case ActionTypes.EDIT_FORM:
			return state.set(action.payload.id, fromJS(action.payload));
		case ActionTypes.DELETE_FORM:
			return state.delete(action.payload);
		default:
			return state;
	}
};