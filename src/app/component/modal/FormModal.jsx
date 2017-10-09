'use strict';

import React from 'react';
import './styles.css';
import { Field } from '../field/Field';
import { fromJS, Map } from 'immutable';
import IdGenerator from '../../utils/id-generator';

const initForm = {
	formName: '',
	fieldName: '',
	fieldType: 'input',
};

export default class FormModal extends React.PureComponent {
	constructor(props) {
		super(props);

		const formId = props.modal.id;
		const editForm = { formName: props.forms.getIn([formId, 'name'], '') };
		const editFields = props.forms.getIn([formId, 'fields'], false);

		this.state = {
			isEdit: Boolean(props.modal.id),
			formId: formId || IdGenerator.getNewFormId(),
			form: Object.assign({}, initForm, editForm),
			fields: editFields || Map(),
			isShowingNewFieldPanel: false,
		};
	}

	deleteField(id) {
		this.setState({ fields: this.state.fields.delete(id) });
	}

	handleInput(e) {
		const { name, value } = e.currentTarget;
		this.setState({ form: Object.assign({}, this.state.form, { [name]: value }) });
	}

	onClickAddNewFieldButton({ e, isShowingNewFieldPanel, form, fields }) {
		e.preventDefault();

		this.setState({ isShowingNewFieldPanel: !this.state.isShowingNewFieldPanel });

		if (isShowingNewFieldPanel && form.fieldName) {
			const id = IdGenerator.getNewFieldId();

			this.setState({
				fields: fields.set(id, fromJS({
					id,
					name: form.fieldName,
					type: form.fieldType,
				})),
				form: Object.assign({}, initForm, { formName: form.formName }),
			});
		}
	}

	onClickSaveButton({ e, formId, form, isEdit }) {
		e.preventDefault();

		if (!form.formName) {
			this.props.hideModal();

			return;
		}

		const data = {
			id: formId,
			name: form.formName,
			fields: this.state.fields,
		};

		isEdit ? this.props.editForm(data) : this.props.addForm(data);
		this.props.hideModal();
	}

	render() {
		const { isEdit, formId, form, fields, isShowingNewFieldPanel } = this.state;
		return (
			<form className="form-modal">
				<section className="form-modal__zone">
					<section className="form-modal-section form-modal-section_justify-content-start">
						<h2 className="form-modal-header">{isEdit ? 'Edit form' : 'Add a new form'}</h2>
					</section>
					<section className="form-modal-section">
						<input
							className="form-modal-input"
							name="formName"
							onChange={e => this.handleInput(e)}
							value={form.formName}
							placeholder="form name"
						/>
						<button className="form-modal-button" onClick={(e) => {
							this.onClickAddNewFieldButton({ e, isShowingNewFieldPanel, form, fields });
						}}>
              <span className="form-modal-button__text form-modal-button__text_to-uppercase">
                {this.state.isShowingNewFieldPanel ? 'add field' : 'new field'}
              </span>
						</button>
					</section>
					{this.state.isShowingNewFieldPanel &&
					<section className="form-modal-section form-modal-section_padding-bottom_10">
						<input
							className="form-modal-input"
							name="fieldName"
							onChange={e => this.handleInput(e)}
							value={form.fieldName}
							placeholder="label"
						/>
						<select
							className="form-modal-select"
							name="fieldType"
							onChange={e => this.handleInput(e)}
							value={form.fieldType}
						>
							<option value="input">Input</option>
							<option value="textarea">Textarea</option>
						</select>
					</section>}
					<section>
						{this.state.fields.toList().map(i => i.flatten()).map(field =>
							<Field
								key={field.get('id')}
								field={field}
								removable={true}
								deleteField={id => this.deleteField(id)}
							/>)}
					</section>
					<section className="form-modal-section">
						<button className="form-modal-button" onClick={(e) => {
							this.onClickSaveButton({ e, formId, form, isEdit });
						}}>
							<span className="form-modal-button__text form-modal-button__text_to-uppercase">save</span>
						</button>
					</section>
					<section className="form-modal-section form-modal-section_padding-top_10">
						<a className="form-modal-text" onClick={(e) => {
							this.props.hideModal();
						}}>
							Cancel
						</a>
					</section>
				</section>
				<section className="form-modal__zone">
					<a
						className="close"
						onClick={() => this.props.hideModal()}>
						&times;
					</a>
				</section>
			</form>
		);
	}
}

FormModal.propTypes = {
	modal: React.PropTypes.object,
	forms: React.PropTypes.object,
	hideModal: React.PropTypes.func,
	addForm: React.PropTypes.func,
	editForm: React.PropTypes.func,
};