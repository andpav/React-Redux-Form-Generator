'use strict';

import React from 'react';
import ModalRoot from '../modal-root/ModalRootContainer';
import Forms from '../forms/FormsContainer';
import './styles.css';

export default class Welcome extends React.PureComponent {
	render() {
		return (
			<section className="welcome">
				<button
					className="welcome__button"
					onClick={() => this.props.showModal({ isShowing: true, id: false })}>
					<span className="text_to-uppercase">new</span>
				</button>
				<ModalRoot/>
				<Forms/>
			</section>
		);
	}
}

Welcome.propTypes = {
	showModal: React.PropTypes.func,
};