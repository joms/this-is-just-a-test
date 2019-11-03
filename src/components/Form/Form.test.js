import React from 'react';
import { shallow } from 'enzyme';
import Form from '.';

describe('<Form>', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<Form onSubmit={onSubmit}>I am a form!</Form>);
    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('submits', () => {
        wrapper.simulate('submit', { preventDefault: () => null });
        expect(onSubmit).toHaveBeenCalled();
    });
});
