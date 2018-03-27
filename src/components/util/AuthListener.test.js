import React from 'react';
import { shallow } from 'enzyme';
import { AuthListener } from './AuthListener';

describe('Auth Listener', () => {
	const mockCreateAuthStateChangeListener = jest.fn();
	const mockRemoveListener = jest.fn();
	const props = {
		createAuthStateChangeListener: mockCreateAuthStateChangeListener,
		removeListener: mockRemoveListener
	};
	const authListener = shallow(<AuthListener {...props} />);

	it('renders properly', () => {
		expect(authListener).toMatchSnapshot();
	});

	describe('when mounting', () => {
		it('calls the authentication listener actions', () => {
			authListener.instance().componentWillMount();
			expect(mockCreateAuthStateChangeListener).toHaveBeenCalled();
		});
	});

	describe('when unmounting', () => {
		it('calls the remove listener function', () => {
			authListener.instance().componentWillUnmount();
			expect(mockRemoveListener).toHaveBeenCalled();
		});
	});
});
