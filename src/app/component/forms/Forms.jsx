'use strict';

import React from 'react';
import './styles.css';
import { Form } from '../form/Form';

export default class Forms extends React.PureComponent {
	render() {
		const { forms } = this.props;
		return (
			<section className="forms">
				{forms.toList().map(form => <Form key={form.get('id')} form={form} props={this.props}/>)}
			</section>
		);
	}
}

Form.propTypes = {
	forms: React.PropTypes.object,
};