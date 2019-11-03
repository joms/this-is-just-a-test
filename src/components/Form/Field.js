import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Field = ({ children, horizontal }) => <div className={cx('field', { horizontal })}>{children}</div>;

Field.defaultProps = {
    horizontal: false,
};

Field.propTypes = {
    children: PropTypes.node.isRequired,
    horizontal: PropTypes.bool,
};

export default Field;
