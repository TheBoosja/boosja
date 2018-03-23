import React from 'react';
import { shallow } from 'enzyme';
import { SignOut } from './SignOut';

describe('Sign Out', () => {
	const mockSignOutUser = jest.fn();
	const mockPush = jest.fn();
	const props = { signOutUser: mockSignOutUser, history: { push: mockPush } };
	const signOut = shallow(<SignOut {...props} />);

	it('renders properly', () => {
		expect(signOut).toMatchSnapshot();
	});

	describe('when it will mount', () => {
		it('signs out the user', () => {
			signOut.instance().componentWillMount();
			expect(mockSignOutUser).toHaveBeenCalled();
		});
	});

	describe('when it did mount', () => {
		it('redirects to the root route', () => {
			signOut.instance().componentDidMount();
			expect(mockPush).toHaveBeenCalledWith('/');
		});
	});
});