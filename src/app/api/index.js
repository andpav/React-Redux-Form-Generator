'use strict';
import formsData from '../../data/forms.json';

// mock up, test server coming soon

// const url = '';
// const headers = {
//	'Content-Type': 'application/json',
// };

export const addForm = (payload) => {
	// const params = { method: 'POST', headers: Object.assign({}, headers), body: payload };

	// return fetch(``, params)
	//	.then((resp) => resp.json(), (err) => ({ type: 'error', error: err }));
	return {
		type: 'ok',
	};
};

export const editForm = (payload) => {
	// const params = { method: 'PATCH', headers: Object.assign({}, headers), body: payload };

	// return fetch(``, params)
	//	.then((resp) => resp.json(), (err) => ({ type: 'error', error: err }));
	return {
		type: 'ok',
	};
};

export const deleteForm = (payload) => {
	// const params = { method: 'DELETE', headers: Object.assign({}, headers), body: payload };

	// return fetch(``, params)
	//	.then((resp) => resp.json(), (err) => ({ type: 'error', error: err }));
	return {
		type: 'ok',
	};
};

export const getForms = () => {
	// const params = { method: 'GET', headers: Object.assign({}, headers) };

	// return fetch(``, params)
	//   .then((resp) => resp.json(), (err) => ({ type: 'error', error: err }));
	return {
		type: 'ok',
		payload: formsData,
	};
};