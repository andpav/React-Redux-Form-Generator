'use strict';

// mock up, test server coming soon
const url = 'localhost:8000';
const headers = {
  'Content-Type': 'application/json',
};

export const addForm = (payload) => {
  const params = { method: 'POST', headers: Object.assign({}, headers), body: payload };

  return fetch(``, params) // url в скобки
    .then((resp) => resp.json(), (err) => ({ type: 'error', error: err }));
};

export const getForms = () => {
  const params = { method: 'GET', headers: Object.assign({}, headers) };

  return fetch(``, params) // url в скобки
    .then((resp) => resp.json(), (err) => ({ type: 'error', error: err }));
};