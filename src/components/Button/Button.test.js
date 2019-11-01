import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('<Button>', () => {
    const wrapper = shallow(<Button>Hello, world</Button>);
    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders text', () => {
        expect(wrapper.text()).toEqual('Hello, world');
    });

    it('renders inverted', () => {
        const invertedWrapper = shallow(<Button invert>Hello, world</Button>);
        expect(invertedWrapper.hasClass('invert')).toBeTruthy();
    });

    it('clicks', () => {
        const onClick = jest.fn();
        const clickWrapper = shallow(<Button onClick={onClick}>Hello, world</Button>);
        clickWrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
