import renderField from './renderField';

describe('renderField', () => {
	const field = renderField({ input: {}, meta: {} });

	it('renders properly', () => {
		expect(field).toMatchSnapshot();
	});
});