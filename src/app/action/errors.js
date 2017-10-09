'use strict';

import * as ErrorTypes from './error-types';

export const receiveFormsFailed = (error) => {
	return {
		type: ErrorTypes.FAILED_RECEIVE_FORMS,
		payload: {
			errorMessage: error.message,
		},
	};
};

export const addFormFailed = (error) => {
	return {
		type: ErrorTypes.FAILED_ADD_FORM,
		payload: {
			errorMessage: error.message,
		},
	};
};

export const editFormFailed = (error) => {
	return {
		type: ErrorTypes.FAILED_EDIT_FORM,
		payload: {
			errorMessage: error.message,
		},
	};
};

export const deleteFormFailed = (error) => {
	return {
		type: ErrorTypes.FAILED_DELETE_FORM,
		payload: {
			errorMessage: error.message,
		},
	};
};