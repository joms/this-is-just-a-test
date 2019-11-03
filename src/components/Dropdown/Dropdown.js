import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Dropdown = ({ label, onChange, options, placeholder, value, error, hint }) => {
    const [open, setOpen] = useState(false);

    const close = () => setOpen(false);
    const show = () => setOpen(true);

    useEffect(() => {
        if (open) {
            window.addEventListener('click', close);
        } else {
            window.removeEventListener('click', close);
        }

        return () => window.removeEventListener('click', close);
    }, [open]);

    const valueText = useMemo(() => {
        if (!value) return false;
        const v = options.find(p => p.value === value).text;

        if (v) {
            return v;
        }

        return false;
    }, [value, options]);

    // TODO Support arrow key navigation https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/modules/Dropdown/Dropdown.js#L514

    return (
        <>
            <label>{label}</label>
            <div className={cx('dropdown', { error, open })} onClick={show} onFocus={show} onBlur={close} tabIndex="0">
                <div className={cx({ value: valueText }, { placeholder: !valueText })}>{valueText || placeholder}</div>
                <i className="arrow" />
                <div className="dropdown-options">
                    {options.map(option => (
                        <div
                            className="dropdown-option"
                            onClick={() => onChange(option.value)}
                            key={option.value + option.text}
                        >
                            {option.text}
                        </div>
                    ))}
                </div>
                {error && <span className="error">{error}</span>}
                {hint && <span className="hint">{hint}</span>}
            </div>
        </>
    );
};

Dropdown.defaultProps = {
    value: '',
    placeholder: '',
    error: '',
    hint: '',
};

Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            text: PropTypes.string,
        })
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    error: PropTypes.string,
    hint: PropTypes.string,
};

export default Dropdown;
