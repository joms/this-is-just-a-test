import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Buttons from './Buttons';

const Button = ({ children, invert, onClick, type, ...rest }) => {
    const classes = cx('button', { invert });

    return (
        <button className={classes} onClick={onClick} type={type} {...rest}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    invert: false,
    onClick: () => null,
    rest: {},
    type: 'button',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    invert: PropTypes.bool,
    onClick: PropTypes.func,
    rest: PropTypes.object,
    type: PropTypes.string,
};

Button.Buttons = Buttons;
export default Button;
