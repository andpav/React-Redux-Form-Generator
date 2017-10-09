'use strict';

import { connect } from 'react-redux';
import * as Actions from '../../action/actions';
import ModalRoot from './ModalRoot';

const mapStateToProps = (state) => ({
	modal: state.modal,
});

export default connect(mapStateToProps)(ModalRoot);