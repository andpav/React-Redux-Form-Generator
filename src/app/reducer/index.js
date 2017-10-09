'use strict';

import { combineReducers } from 'redux';
import modal from './modal';
import forms from './forms';

export default combineReducers({
	modal,
	forms,
});
