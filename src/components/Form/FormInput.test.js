import React from 'react';
import { shallow } from 'enzyme';
import { FormInput } from '.';

describe('<Input>', () => {
    it('matches snapshot', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <FormInput label="Hello, input" onChange={onChange} hint="this is a hint" error="This field is required" />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
