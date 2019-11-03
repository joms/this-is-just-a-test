import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ children }) => <div className="buttons">{children}</div>;

Buttons.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Buttons;
