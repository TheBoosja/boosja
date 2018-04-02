import styled, { css } from 'styled-components';

const mb = css`
	margin-bottom: 2rem;
`;

const fw = css`
	font-weight: 400;
`;

const PrimaryHeading = styled.h1`
	font-size: 5rem;
	font-weight: 700;
	${mb};
`;
PrimaryHeading.displayName = 'PrimaryHeading';

const SecondaryHeading = styled.h2`
	font-size: 3.5rem;
	text-align: center;
	${fw};
	${mb};
`;
SecondaryHeading.displayName = 'SecondaryHeading';

const TertiaryHeading = styled.h3`
	font-size: 2rem;
	margin-bottom: 1rem;
	${fw};
`;
TertiaryHeading.displayName = 'TertiaryHeading';

const QuaternaryHeading = styled.h4`
	font-size: 2rem;
`;
QuaternaryHeading.displayName = 'QuaternaryHeading';

export { PrimaryHeading, SecondaryHeading, TertiaryHeading, QuaternaryHeading };
