import React from 'react';
import {configure, shallow} from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import {SignIn} from '..';
import {CardTitle} from '../UI/Card';
import PrimaryTextField from '../UI/PrimaryTextField';

configure({adapter: new Adapter()});

const mockSignIn = jest.fn((email, password) => {
  return Promise.resolve({email, password});
});

describe('<SignIn />', () => {
  const wrapper = shallow(<SignIn signIn={mockSignIn} />);

  it('renders CardTitle', () => {
    const title = wrapper.find(CardTitle);
    expect(title.exists()).toBeTruthy();
  });

  it('CardTitle should be "Sign In"', () => {
    const title = wrapper.find(CardTitle);
    expect(title.text()).toBe('Sign In');
  });

  it('renders emailController', () => {
    const emailController = wrapper.find('Controller[name="email"]');
    expect(emailController.exists()).toBeTruthy();
  });

  it('renders passwordController', () => {
    const passwordController = wrapper.find('Controller[name="password"]');
    expect(passwordController.exists()).toBeTruthy();
  });

  it('renders emailTextField', () => {
    const passwordController = wrapper.find('Controller[name="password"]');
    const input = passwordController.dive();
    input.simulate('change', {target: {value: 'width'}});
    console.log(input.props());
  });

  it('renders passwordTextField', () => {
    const input = wrapper.find(PrimaryTextField);
  });
});
