import React from 'react';
import {configure, shallow} from 'enzyme';
import PrimaryButton from '.';

import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const myMock = jest.fn();

describe('<PrimaryButton />', () => {
  const button = shallow(
    <PrimaryButton
      isLoad={true}
      color="primary"
      variant="contained"
      onClick={myMock}
    >
      Button
    </PrimaryButton>,
  );

  it('show Loader component', () => {
    const loader = button.find('Loader');
    expect(loader.exists()).toBe(true);
  });

  it('hide Loader component', () => {
    button.setProps({isLoad: false});
    const loader = button.find('Loader');
    expect(loader.exists()).toBe(false);
  });

  it('click PrimaryButton component', () => {
    button.simulate('click');
    expect(myMock.mock.calls.length).toEqual(1);
  });
});
