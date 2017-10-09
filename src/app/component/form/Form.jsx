import React from 'react';
import './styles.css';
import { Field } from '../field/Field';

export const Form = (({ form, props }) =>
		<form className="form">
			<section className="form-section">
				<h2 className="form-header">{form.get('name')}</h2>
			</section>
			{form.get('fields').toList().map(field => <Field key={field.get('id')} field={field} removable={false}/>)}
			<section className="form-section">
				<a
					className="form__delete-button"
					onClick={() => props.deleteForm(form.get('id'))}
				>
					delete
				</a>
				<a
					className="form__edit-button"
					onClick={() => props.showModal({ isShowing: true, id: form.get('id') })}
				>
					edit
				</a>
			</section>
		</form>
);

Form.propTypes = {
	form: React.PropTypes.object,
	props: React.PropTypes.object,
};