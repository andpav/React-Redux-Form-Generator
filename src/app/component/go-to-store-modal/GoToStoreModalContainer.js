'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import GoToStoreModal from './GoToStoreModal';

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    fields: state.fields,
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
    /*addField: (data) => {
      dispatch(Actions.addField(data));
    },
    deleteField: (id) => {
      dispatch(Actions.deleteField(id));
    },*/
    addForm: (data) => {
      dispatch(Actions.addForm(data));
    },
    deleteForm: (id) => {
      dispatch(Actions.deleteForm(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoToStoreModal);