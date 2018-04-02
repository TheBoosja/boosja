import React from 'react';
import moment from 'moment';
import { ResultItem, ResultImage, ResultName, QuaternaryHeading } from 'components/styled';

const SearchListItem = ({ show: { id, poster_path, name, first_air_date } }) => {
	const source = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : 'none';

	const firstAirDate = first_air_date ? moment(first_air_date).format('YYYY') : 'N/A';

	return (
		<ResultItem to={`/tv/${id}`}>
			<ResultImage src={source} alt={`${name} poster`} />
			<ResultName>
				<QuaternaryHeading>{name}</QuaternaryHeading>
				<p>{firstAirDate}</p>
			</ResultName>
		</ResultItem>
	);
};

export default SearchListItem;
