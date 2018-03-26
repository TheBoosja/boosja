import React, { Fragment } from 'react';
import { Input, Error } from 'components/styled';

export default function renderField({
	input,
	name,
	type,
	label,
	autoFocus,
	meta: { touched, error }
}) {
	return (
		<Fragment>
			<Input
				{...input}
				name={name}
				type={type}
				placeholder={label}
				autoFocus={autoFocus}
			/>
			<Error>{touched && error}&nbsp;</Error>
		</Fragment>
	);
}
