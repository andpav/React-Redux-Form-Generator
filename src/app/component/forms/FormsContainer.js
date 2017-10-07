'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import Forms from './Forms';

const mapStateToProps = (state) => {
	return {
		forms: state.forms,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		/*addForm: (data) => {
			dispatch(Actions.addForm(data));
		},
		deleteForm: (id) => {
			dispatch(Actions.deleteForm(id));
		},*/
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);