import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('<Button>', () => {
    const wrapper = shallow(
        <Button.Buttons>
            <Button>Yolo</Button>
            <Button>Swag</Button>
        </Button.Buttons>
    );
    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
