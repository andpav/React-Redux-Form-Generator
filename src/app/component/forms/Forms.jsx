'use strict';

import React from 'react';
import './styles.css';

export default class Forms extends React.PureComponent {
	render() {
		console.log(this.props.forms);
		return (
			<div className="field">
				{this.props.forms.toList().map(form => <Form key={form.get('id')} form={form}/>)}
			</div>
		);
	}
}

const Form = (({ form }) =>
		<form className="form">
			<div className="go-to-store-modal__zone">
				<div className="go-to-store-modal-section go-to-store-modal-section_justify-content-start">
					<h2 className="go-to-store-modal-header">{form.get('name')}</h2>
				</div>
				{form.get('fields').toList().map(field => <Field key={field.get('id')} field={field}/>)}
				<div className="go-to-store-modal-section">
					<a
						className="close"
						onClick={() => this.props.hideModal()}>
						delete
					</a>
					<a
						className="close"
						onClick={() => this.props.hideModal()}>
						edit
					</a>
				</div>
			</div>
		</form>
);

const Field = (({ field }) =>
		<div className="go-to-store-modal-section">
			<label htmlFor="form1_input1">{field.get('label')}</label>
			{field.get('type') === 'textarea' ?
				<textarea className="go-to-store-modal-input"/> :
				<input className="go-to-store-modal-input"/>}
		</div>
);