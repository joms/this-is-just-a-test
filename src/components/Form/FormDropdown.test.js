import React from 'react';
import { shallow } from 'enzyme';
import { FormDropdown } from '.';

describe('<FormDropdown>', () => {
    it('matches snapshot', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <FormDropdown
                label="Hello, Dropdown!"
                options={[{ value: 3.14, text: 'PI' }, { value: 6.28, text: 'Tau' }]}
                onChange={onChange}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
