import React from 'react';
import GoToStoreModal from '../modal/FormModalContainer';
import './styles.css';

export default class ModalRoot extends React.PureComponent {
	render() {
		const { isShowing } = this.props.modal;
		return (
			isShowing && <section>
				<section className="modal">
					<section className="modal__content">
						{isShowing && <GoToStoreModal/>}
					</section>
				</section>
			</section>
		);
	}
}

ModalRoot.propTypes = {
	modal: React.PropTypes.object,
};