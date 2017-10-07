'use strict';

import * as ActionTypes from './action-types';

export const showModal = (id) => {
  return {
    type: ActionTypes.SHOW_MODAL,
    payload: id,
  };
};

export const hideModal = () => {
  return {
    type: ActionTypes.HIDE_MODAL,
  };
};

export const addField = (data) => {
	return {
		type: ActionTypes.ADD_FIELD,
		payload: data,
	};
};

export const deleteField = (id) => {
	return {
		type: ActionTypes.DELETE_FIELD,
		payload: id,
	};
};

export const addForm = (data) => {
	return {
		type: ActionTypes.ADD_FORM,
		payload: data,
	};
};

export const deleteForm = (id) => {
	return {
		type: ActionTypes.DELETE_FORM,
		payload: id,
	};
};