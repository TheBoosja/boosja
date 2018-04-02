import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { SearchField } from 'components/styled';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	renderField({ input, placeholder }) {
		return <SearchField {...input} placeholder={placeholder} autoFocus />;
	}

	onFormSubmit({ query }) {
		const { history, match } = this.props;

		history.push(`${match.url}/${query}`);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onFormSubmit)}>
				<Field name="query" placeholder="Search" autoFocus component={this.renderField} />
			</form>
		);
	}
}

export function validate({ query }) {
	return !query ? { query: 'Enter a query' } : {};
}

const ComputedSearchBar = reduxForm({ form: 'search', validate })(SearchBar);

ComputedSearchBar.displayName = 'SearchBar';
export default ComputedSearchBar;
