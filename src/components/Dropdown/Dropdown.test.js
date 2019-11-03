import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '.';

describe('<App>', () => {
    let wrapper;
    let onChange;

    beforeEach(() => {
        onChange = jest.fn();
        wrapper = shallow(
            <Dropdown
                label="Hello, Dropdown!"
                options={[{ value: 3.14, text: 'PI' }, { value: 6.28, text: 'Tau' }]}
                onChange={onChange}
            />
        );
    });

    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('opens', () => {
        expect(wrapper.find('.dropdown').hasClass('open')).toBeFalsy();
        wrapper.find('.dropdown').simulate('click');
        expect(wrapper.find('.dropdown').hasClass('open')).toBeTruthy();
    });

    it('handles change', () => {
        wrapper.find('.dropdown').simulate('click');
        wrapper
            .find('.dropdown-option')
            .first()
            .simulate('click');

        expect(onChange).toHaveBeenCalled();
    });
});
