import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Input = ({ label, placeholder, onChange, value, type, error, hint, ...rest }) => (
    <>
        <label>{label}</label>
        <input
            {...rest}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            value={value}
            className={cx({ error })}
        />
        {error && <span className="error">{error}</span>}
        {hint && <span className="hint">{hint}</span>}
    </>
);

Input.defaultProps = {
    placeholder: '',
    onChange: () => null,

    value: '',
    error: '',
    hint: '',
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string,
    hint: PropTypes.string,
};

export default Input;
