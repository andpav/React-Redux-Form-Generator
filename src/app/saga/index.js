'use strict';

import * as Forms from './forms';
import { fork } from 'redux-saga/effects';

const root = function* root() {
	yield Forms.startUpForms();
	yield [
		fork(Forms.watchAddForm),
		fork(Forms.watchEditForm),
		fork(Forms.watchDeleteForm),
	];
};

export default root;
