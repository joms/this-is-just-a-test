import React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

describe('<Input>', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
        <Input label="Hello, input" onChange={onChange} hint="this is a hint" error="This field is required" />
    );

    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('handles input change', () => {
        wrapper.find('input').simulate('change', 'Hi thar!');
        expect(onChange).toHaveBeenCalledWith('Hi thar!');
    });

    it('renders hint text', () => expect(wrapper.text().includes('this is a hint')).toBeTruthy());

    it('renders error text', () => expect(wrapper.text().includes('This field is required')).toBeTruthy());
});
