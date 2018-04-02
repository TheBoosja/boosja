import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Input, Image } from './index';

const SearchPage = styled.div`
	padding: 2rem;
	padding-top: 0;
`;

const SearchField = Input.extend`
	background-color: transparent;
	border-bottom: 0.2rem solid ${({ theme }) => theme.detailColor};
	color: ${({ theme }) => theme.detailColor};
	font-size: 3rem;
	text-align: center;
	transition: all 0.2s;

	&:focus {
		border-bottom: 0.2rem solid currentColor;
		color: inherit;
	}
`;
SearchField.displayName = 'SearchField';

const SearchResult = styled.div`
	padding-top: 2rem;
`;
SearchResult.displayName = 'SearchResult';

const ResultList = styled.ul`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	list-style: none;
`;
ResultList.displayName = 'ResultList';

const ResultItem = styled(Link)`
	color: inherit;
	display: grid;
	height: 100%;
	text-decoration: none;
`;
ResultItem.displayName = 'ResultItem';

const ResultImage = Image.extend`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
`;
ResultImage.displayName = 'ResultImage';

const ResultName = styled.span`
	align-content: center;
	background-color: ${rgba('black', 0.8)};
	display: grid;
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	justify-content: center;
	opacity: 0;
	padding: 2rem;
	text-align: center;
	transition: all 0.2s;

	${ResultItem}:hover & {
		opacity: 1;
	}
`;
ResultName.displayName = 'ResultName';

export { SearchPage, SearchField, SearchResult, ResultList, ResultItem, ResultImage, ResultName };
