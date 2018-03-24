import React, { Fragment } from 'react';
import { Input, Error } from '../styled';

export default function renderField({ input, name, label, type, autoFocus, meta: { touched, error } }) {
	return (
		<Fragment>
			<Input {...input} name={name} type={type} placeholder={label} autoFocus={autoFocus} />
			<Error>{touched && error}&nbsp;</Error>
		</Fragment>
	);
}