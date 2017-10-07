'use strict';

import { take, put, call, fork, select } from 'redux-saga/effects';
import * as Api from '../api';
import * as ActionTypes from '../action/action-types';
import * as Actions from '../action/actions';

function addFormApi(payload) {
	return Api.addForm(payload);
}

function getFormsApi() {
	return Api.getForms();
}

export function* addForm(payload) {
	const response = yield addFormApi(payload);

	if (response.type !== 'error') {
		yield put(Actions.addForm(payload));
	} else {
		// об ошибке
	}
}

export function* getForms() {
	const response = yield getFormsApi();

	if (response.type !== 'error') {
		yield put();
		// вызов экшна, который добавляет в изначально пустой стор
	} else {
		// об ошибке
	}
}

const inf = true;

export function* watchAddForm() {
	while (inf) {
		const action = yield take(ActionTypes.ADD_FORM);
		yield fork(addForm, action.payload);
	}
}

export function* startUpForms() {
  yield getForms();
}

const root = function* root() {
	yield startUpForms();
	yield [
		fork(watchAddForm),
	];
};

export default root;
