'use strict';

import * as Api from '../api';
import * as ActionTypes from '../action/action-types';
import * as Actions from '../action/actions';
import * as Errors from '../action/errors';
import { take, put, call } from 'redux-saga/effects';

function addFormApi(payload) {
	return Api.addForm(payload);
}

function editFormApi(payload) {
	return Api.editForm(payload);
}

function deleteFormApi(payload) {
	return Api.deleteForm(payload);
}

function getFormsApi() {
	return Api.getForms();
}

function* addForm(payload) {
	const response = yield addFormApi(payload);

	if (response.type !== 'error') {
		yield put(Actions.addForm(payload));
	} else {
		yield put(Errors.addFormFailed(payload.error));
	}
}

function* editForm(payload) {
	const response = yield editFormApi(payload);

	if (response.type !== 'error') {
		yield put(Actions.editForm(payload));
	} else {
		yield put(Errors.editFormFailed(payload.error));
	}
}

function* deleteForm(payload) {
	const response = yield deleteFormApi(payload);

	if (response.type !== 'error') {
		yield put(Actions.deleteForm(payload));
	} else {
		yield put(Errors.deleteFormFailed(payload.error));
	}
}

function* getForms() {
	const response = yield getFormsApi();

	if (response.type !== 'error') {
		yield put(Actions.receiveForms(response.payload));
	} else {
		yield put(Errors.deleteFormFailed(response.payload.error));
	}
}

const inf = true;

export function* watchAddForm() {
	while (inf) {
		const action = yield take(ActionTypes.ADD_FORM);
		yield call(addForm, action.payload);
	}
}

export function* watchEditForm() {
	while (inf) {
		const action = yield take(ActionTypes.EDIT_FORM);
		yield call(editForm, action.payload);
	}
}

export function* watchDeleteForm() {
	while (inf) {
		const action = yield take(ActionTypes.DELETE_FORM);
		yield call(deleteForm, action.payload);
	}
}

export function* startUpForms() {
	yield getForms();
}