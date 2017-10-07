'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import ModalRoot from './ModalRoot';

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => {
      dispatch(Actions.showModal(id));
    },
    hideModal: () => {
      dispatch(Actions.hideModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);