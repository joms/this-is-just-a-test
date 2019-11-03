import React from 'react';
import { Field } from '.';
import Input from '../Input';

const FormInput = ({ ...args }) => (
    <Field>
        <Input {...args} />
    </Field>
);

FormInput.propTypes = Input.propTypes;

export default FormInput;
