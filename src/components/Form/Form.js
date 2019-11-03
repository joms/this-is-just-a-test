import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import FormInput from './FormInput';

const Form = ({ children, onSubmit }) => {
    const handleSubmit = (e, ...args) => {
        e.preventDefault();
        onSubmit(e, args);
    };

    return <form onSubmit={handleSubmit}>{children}</form>;
};

Form.defaultProps = {
    handleSubmit: () => null,
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    handleSubmit: PropTypes.func,
};

Form.Field = Field;
Form.Input = FormInput;

export default Form;
