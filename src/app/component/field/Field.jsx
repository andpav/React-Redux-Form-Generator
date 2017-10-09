import React from 'react';
import './styles.css';

export const Field = ({ field, removable, deleteField }) => {
	return (
		<section className="field">
			<label className="field__label" htmlFor={field.get('id')}>{field.get('name')}</label>
			{
				field.get('type') === 'textarea' ?
					<textarea className="field__input" id={field.get('id')}/>
					: <input className="field__input" id={field.get('id')}/>
			}
			{
				removable &&
				<buttons
					className="field__close"
					onClick={() => deleteField(field.get('id'))}
				>
					<span>&times;</span>
				</buttons>
			}
		</section>
	);
};

Field.propTypes = {
	field: React.PropTypes.object,
	removable: React.PropTypes.bool,
	deleteField: React.PropTypes.func,
};