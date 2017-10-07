'use strict';

import React from 'react';
import ModalRoot from '../modal-root/ModalRootContainer';
import Forms from '../forms/FormsContainer';
import './styles.css';

export default class Welcome extends React.PureComponent {
	render() {
		return (
			<div className="welcome">
				<button
					className="welcome__button"
					onClick={() => this.props.showModal('isShowingNewFormModal')}>
					<span>NEW</span>
				</button>
				<ModalRoot/>
				<Forms/>
			</div>
		);
	}
}
