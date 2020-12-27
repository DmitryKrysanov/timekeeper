import React from 'react';
import {configure, shallow} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import TextField from '.';

configure({adapter: new Adapter()});

describe('<TextField />', () => {
  const testState: any = {name: 'John'};
  const textField = shallow(
    <TextField
      variant="filled"
      label="label"
      name="email"
      onChange={(event) => {
        testState[event.target.name] = event.target.value;
      }}
    />,
  );

  it('change testState value', () => {
    const expectedState: any = {name: 'Bob'};
    textField.simulate('change', {target: {name: 'name', value: 'Bob'}});
    expect(testState.name).toBe(expectedState.name);
  });
});
