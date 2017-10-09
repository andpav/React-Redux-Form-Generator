'use strict';

import * as ActionTypes from './action-types';

export const showModal = data => ({
	type: ActionTypes.SHOW_MODAL,
	payload: data,
});

export const hideModal = () => ({
	type: ActionTypes.HIDE_MODAL,
});


export const addForm = data => ({
	type: ActionTypes.ADD_FORM,
	payload: data,
});

export const editForm = id => ({
	type: ActionTypes.EDIT_FORM,
	payload: id,
});

export const deleteForm = id => ({
		type: ActionTypes.DELETE_FORM,
		payload: id,
});

export const receiveForms = data => ({
	type: ActionTypes.RECEIVE_FORMS,
	payload: data,
});