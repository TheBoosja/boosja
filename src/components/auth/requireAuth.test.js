import React from 'react';
import { shallow } from 'enzyme';
import { Authentication } from './requireAuth';

describe('Require Auth', () => {
	const mockComponent = () => <div />;
	mockComponent.displayName = 'MockComponent';
	const props = { isAuthenticated: true, ComposedComponent: mockComponent };
	const authedComponent = shallow(<Authentication {...props} />);

	it('renders component when authenticated', () => {
		expect(authedComponent.find('MockComponent').exists()).toBe(true);
	});

	it('renders a redirect component when not authenticated', () => {
		authedComponent.setProps({ isAuthenticated: false });
		expect(authedComponent.find('Redirect').exists()).toBe(true);
	});
});