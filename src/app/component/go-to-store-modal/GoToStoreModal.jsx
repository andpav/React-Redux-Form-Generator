'use strict';

import React from 'react';
import './styles.css';
import { fromJS, Map, List } from 'immutable';
import IdGenerator from '../../utils/id-generator';

const initForm = {
	formName: '',
	fieldName: '',
	fieldType: 'input',
};

export default class GoToStoreModal extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			form: initForm,
			isShowingNewFieldPanel: false,
			fields: Map(),
		};
	}

	deleteField(id) {
		this.setState({ fields: this.state.fields.delete(id) });
	}

	handleInput(e) {
		const { name, value } = e.currentTarget;
		this.setState({ form: Object.assign({}, this.state.form, {[name]: value} ) });
	}

	render() {
		const { form } = this.state;
		return (
			<form className="go-to-store-modal">
				<div className="go-to-store-modal__zone">
					<div className="go-to-store-modal-section go-to-store-modal-section_justify-content-start">
						<h2 className="go-to-store-modal-header">Add a new form</h2>
					</div>
					<div className="go-to-store-modal-section">
						<input
							className="go-to-store-modal-input"
							name="formName"
							onChange={e => this.handleInput(e)}
							value={form.formName}
							placeholder="form name"/>
						<button className="go-to-store-modal-button" onClick={(e) => {
							e.preventDefault();
							this.setState({ isShowingNewFieldPanel: !this.state.isShowingNewFieldPanel });

							if (this.state.isShowingNewFieldPanel && this.state.form.fieldName) {
								const id = IdGenerator.getNewFieldId();

								this.setState({
									fields: this.state.fields.set(id, fromJS({
										id,
										name: form.fieldName,
										type: form.fieldType,
									})),
									form: Object.assign({}, initForm, { formName: form.formName }),
								});
							}
						}}>
              <span className="go-to-store-modal-button__text">
                {this.state.isShowingNewFieldPanel ? 'ADD FIELD' : 'NEW FIELD'}
              </span>
						</button>
					</div>
					{this.state.isShowingNewFieldPanel && <div className="go-to-store-modal-section">
						<input
							className="go-to-store-modal-input"
							name="fieldName"
							onChange={e => this.handleInput(e)}
							value={form.fieldName}
							placeholder="label"/>
						<select
							name="fieldType"
							onChange={e => this.handleInput(e)}
							value={form.fieldType}
						>
							<option value="input">Input</option>
							<option value="textarea">Textarea</option>
						</select>
					</div>}
					<div>
						{this.state.fields.toList().map(i => i.flatten()).map(field =>
							<Field
								key={field.get('id')}
								field={field}
								deleteField={id => this.deleteField(id)}
							/>)}
					</div>
					<div className="go-to-store-modal-section">
						<button className="go-to-store-modal-button" onClick={(e) => {
							e.preventDefault();
							this.props.addForm({
								id: IdGenerator.getNewFormId(),
								name: form.formName,
								fields: this.state.fields,
							});
							this.props.showModal('isShowingForgotPasswordModal');
						}}>
							<span className="go-to-store-modal-button__text">SAVE</span>
						</button>
					</div>
					<div className="go-to-store-modal-section go-to-store-modal-section_padding-10">
						<a className="go-to-store-modal-link" onClick={(e) => {
							e.preventDefault();
							this.props.hideModal();
						}}>Cancel
						</a>
					</div>
				</div>
				<div className="go-to-store-modal__zone">
					<a
						className="close"
						onClick={() => this.props.hideModal()}>
						&times;
					</a>
				</div>
			</form>
		);
	}
}

const Field = ({ field, deleteField }) => {
	return (
		<div className="go-to-store-modal-section">
			<label htmlFor={field.get('id')}>{field.get('name')}</label>
			{
				field.get('type') === 'textarea' ?
					<textarea className="go-to-store-modal-input" id={field.get('id')}/> :
					<input className="go-to-store-modal-input" id={field.get('id')}/>}
			<buttons
				className="close"
				onClick={(e) => {
					e.preventDefault();
					deleteField(field.get('id'));
				}}>
				<span>&times;</span>
			</buttons>
		</div>
	);
};