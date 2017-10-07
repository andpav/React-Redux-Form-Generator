import React from 'react';
import GoToStoreModal from '../go-to-store-modal/GoToStoreModalContainer';
import './styles.css';

export default class ModalRoot extends React.PureComponent {
  render() {
  	const {isShowingNewFormModal} = this.props.modal;
    return (
      (isShowingNewFormModal) && <div>
        <div className="modal">
          <div className="modal__content">
            {isShowingNewFormModal && <GoToStoreModal/>}
          </div>
        </div>
      </div>
    );
  }
}
