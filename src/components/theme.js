import { injectGlobal } from 'styled-components';

injectGlobal`
	*,
	*:before,
	*:after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		font-size: 62.5%;
	}

	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
	body {
		font-family: 'Roboto', sans-serif;
		font-size: 1.4rem;
		font-weight: 400;
		line-height: 1.6;
	}
`;

export default {
	primaryColor: '#0084d1',
	textColor: '#c4ccd1',
	bgDark: '#202223',
	bgLight: '#393e41'
};