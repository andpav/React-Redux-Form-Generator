'use strict';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../action/actions';
import GoToStoreModal from './FormModal';

const mapStateToProps = (state) => ({
	modal: state.modal,
	forms: state.forms,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GoToStoreModal);