'use strict';

import { combineReducers } from 'redux';
import * as ActionTypes from '../action/action-types';
import { fromJS, Map } from 'immutable';

const modalState = {
	isShowingNewFormModal: false,
};

const modal = (state = modalState, action) => {
	switch (action.type) {
		case ActionTypes.SHOW_MODAL:
			return Object.assign({}, modalState, {
				[action.payload]: true,
			});
		case ActionTypes.HIDE_MODAL:
			return modalState;
		default:
			return state;
	}
};
/*
const fieldsState = fromJS({
});

const fields = (state = fieldsState, action) => {
	switch (action.payload) {
		case ActionTypes.ADD_FIELD:
			return state.set(action.payload.get('id'), fromJS(action.payload));
		case ActionTypes.DELETE_FIELD:
			return state.delete(action.payload);
		default:
			console.log(state, ' state!')
			return state;
	}
};*/

const formsState = fromJS({
	uniqueid1: {
		id: 'uniqueid1',
		name: 'my form 1',
		fields: {
			uniqueid11: {
				id: 'uniqueid11',
				label: 'field 1',
				type: 'input',
			},
		},
	},
	uniqueid2: {
		id: 'uniqueid2',
		name: 'my form 2',
		fields: {
			uniqueid21: {
				id: 'uniqueid21',
				label: 'field 1',
				type: 'input',
			},
			uniqueid22: {
				id: 'uniqueid22',
				label: 'field 2',
				type: 'textarea',
			},
		},
	},
});

const forms = (state = formsState, action) => {
	switch (action.type) {
		case ActionTypes.ADD_FORM:
			console.log(action.payload)
			return state.set(action.payload.id, fromJS(action.payload));
		case ActionTypes.DELETE_FORM:
			return state.delete(action.payload);
		default:
			return state;
	}
};

export default combineReducers({
	modal,
	forms,
});
