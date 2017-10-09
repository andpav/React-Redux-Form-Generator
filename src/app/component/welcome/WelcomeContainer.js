'use strict';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../action/actions';
import Welcome from './Welcome';

const mapStateToProps = (state) => ({
	modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);