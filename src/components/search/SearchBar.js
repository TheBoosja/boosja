import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'components/styled';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit({ query }) {
		const { history, match } = this.props;

		history.push(`${match.url}/${query}`);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<Form onSubmit={handleSubmit(this.onFormSubmit)}>
				<Field
					name="query"
					placeholder="Search"
					autoFocus
					component="input"
				/>
			</Form>
		);
	}
}

function validate({ query }) {
	return !query ? { query: 'Enter a query' } : {};
}

const ComputedSearchBar = reduxForm({ form: 'search', validate })(SearchBar);

ComputedSearchBar.displayName = 'SearchBar';
export default ComputedSearchBar;
