import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search, emptyResults } from 'actions/search';
import SearchListItem from './SearchListItem';
import { SearchResult, ResultList, TertiaryHeading } from 'components/styled';

export class SearchList extends Component {
	constructor(props) {
		super(props);

		this.handleQuery = this.handleQuery.bind(this);
	}

	handleQuery(query, page = 1) {
		this.props.search(query, page);
	}

	componentWillMount() {
		const { query, page } = this.props.match.params;
		this.handleQuery(query, page);
	}

	componentWillUpdate({ match: { params: { query } } }) {
		const oldQuery = this.props.match.params.query;

		if (query !== oldQuery) {
			this.props.emptyResults();
			this.handleQuery(query);
		}
	}

	renderResults(results) {
		return results.map((res, i) => (
			<li key={i}>
				<SearchListItem show={res} />
			</li>
		));
	}

	render() {
		const { results, total_results, total_pages, match: { params: { page } } } = this.props;

		if (!results) {
			return <span>Loading...</span>;
		}

		return (
			<SearchResult>
				<TertiaryHeading>Results: {total_results}</TertiaryHeading>

				<ResultList>{this.renderResults(results)}</ResultList>
			</SearchResult>
		);
	}
}

function mapStateToProps({ search: { results, total_results, page, total_pages } }) {
	return {
		results,
		total_results,
		page,
		total_pages
	};
}

export default connect(mapStateToProps, { search, emptyResults })(SearchList);
