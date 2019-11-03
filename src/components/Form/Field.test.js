import React from 'react';
import { shallow } from 'enzyme';
import { Field } from '.';

describe('<Field>', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(<Field>Hello, world!</Field>);
        expect(wrapper).toMatchSnapshot();
    });
});
